import { useCallback, useEffect, useState } from 'react';
import useSWR from 'swr';
import { Story, StoryWithAuthor } from '@/types/story';
import { User } from '@/types/user';
import { fetcher } from '@utils/api';
import { getFulfilledResults, getRandomStoryIds } from '@hooks/helpers';
import { baseUrl } from '@utils/constants';

export const useHackerNewsStories = () => {
  const {
    data: storyIds,
    error: storyIdsError,
    isLoading: isTopStoriesLoading,
  } = useSWR(baseUrl + 'topstories.json', fetcher);

  const [storiesWithAuthors, setStoriesWithAuthors] = useState<StoryWithAuthor[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStoriesWithAuthors = useCallback(async () => {
    setIsLoading(true);

    if (!storyIds || storyIdsError) {
      setError(storyIdsError ? 'Failed to fetch story IDs' : null);
      setIsLoading(false);
      return;
    }

    try {
      const randomStoryIds = getRandomStoryIds(storyIds, 10);

      const storyPromises = randomStoryIds.map(id => fetch(baseUrl + `item/${id}.json`).then(res => res.json()));
      const stories: PromiseSettledResult<Story>[] = await Promise.allSettled(storyPromises);

      const fulfilledStories = getFulfilledResults(stories);

      if (fulfilledStories.length === 0) {
        setError('No valid stories found');
        setIsLoading(false);
        return;
      }

      const storiesWithAuthorsPromises = fulfilledStories.map(async story => {
        const authorResponse = await fetch(baseUrl + `user/${story.by}.json`);
        const author: User = await authorResponse.json();
        return {
          ...story,
          author,
        } as StoryWithAuthor;
      });

      const fetchedStoriesWithAuthors = await Promise.allSettled(storiesWithAuthorsPromises);

      const fulfilledStoriesWithAuthors = getFulfilledResults(fetchedStoriesWithAuthors);

      const sortedStories = fulfilledStoriesWithAuthors.sort((a, b) => a.score - b.score);

      setStoriesWithAuthors(sortedStories);
      setIsLoading(false);
    } catch (err) {
      console.error('Error fetching stories:', err);
      setError('Failed to fetch stories');
      setIsLoading(false);
    }
  }, [storyIds, storyIdsError]);

  useEffect(() => {
    if (storyIds) {
      fetchStoriesWithAuthors();
    }
  }, [storyIds, storyIdsError]);

  return {
    storiesWithAuthors,
    isLoading: isLoading || isTopStoriesLoading,
    error,
    refetch: fetchStoriesWithAuthors,
  };
};
