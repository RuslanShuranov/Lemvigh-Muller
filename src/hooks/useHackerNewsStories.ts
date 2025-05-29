import { useMemo } from 'react';
import useSWR from 'swr';
import { fetcher, multiFetcher } from '@utils/api';
import { Story, StoryWithAuthor } from '@/types/story';
import { User } from '@/types/user';
import { baseUrl } from '@utils/constants';
import { getRandomStoryIds } from '@hooks/helpers';

export function useHackerNewsStories() {
  const {
    data: topIds,
    error: errorTop,
    isLoading: loadingTop,
  } = useSWR<number[]>(`${baseUrl}/topstories.json`, fetcher);

  const selectedIds = useMemo<number[]>(
    () => getRandomStoryIds(topIds || [], 10),
    [topIds]
  );

  const storyUrls: string[] = selectedIds.length
    ? selectedIds.map(id => `${baseUrl}/item/${id}.json`)
    : [];

  const {
    data: storiesData,
    error: errorStories,
    isLoading: loadingStories,
  } = useSWR<Story[]>(storyUrls, multiFetcher);

  const authorUrls: string[] = storiesData
    ? storiesData.map(story => `${baseUrl}/user/${story.by}.json`)
    : [];

  const {
    data: authorsData,
    error: errorAuthors,
    isLoading: loadingAuthors,
  } = useSWR<User[]>(authorUrls, multiFetcher);

  const storiesWithAuthors = useMemo<StoryWithAuthor[]>(() => {
    if (!storiesData?.length || !authorsData?.length) return [];

    const combined: StoryWithAuthor[] = storiesData.map((story, i) => ({
      ...story,
      author: authorsData[i],
    }));

    return combined.sort((a, b) => a.score - b.score);
  }, [storiesData, authorsData]);

  const isLoading = loadingTop || loadingStories || loadingAuthors;
  const error =
    errorTop?.message || errorStories?.message || errorAuthors?.message || '';

  return {
    stories: storiesWithAuthors,
    isLoading,
    error,
  };
}
