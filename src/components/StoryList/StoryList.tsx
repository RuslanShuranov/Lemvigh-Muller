import React from 'react';
import StoryCard from '../StoryCard/StoryCard';
import './StoryList.scss';
import { useHackerNewsStories } from '@hooks/useHackerNewsStories';
import SkeletonCard from '@components/SkeletonCard/SkeletonCard';

const StoryList: React.FC = () => {
  const { stories, isLoading, error } = useHackerNewsStories();

  if (error) {
    return (
      <div className="story-list__error">
        <p>Error fetching stories: {error}</p>
      </div>
    );
  }

  return (
    <div className="story-list">
      <div className="story-list__header">
        <h2 className="story-list__title">Top-10 Hacker News Stories</h2>
      </div>
      {isLoading ? (
        Array.from({ length: 10 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))
      ) : stories.length === 0 ? (
        <div className="story-list__empty">No stories found</div>
      ) : (
        stories.map(story => <StoryCard key={story.id} story={story} />)
      )}
    </div>
  );
};

export default StoryList;
