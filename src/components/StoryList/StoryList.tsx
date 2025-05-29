import React from 'react';
import StoryCard from '../StoryCard/StoryCard';
import './StoryList.scss';
import { useHackerNewsStories } from '@hooks/useHackerNewsStories';
import SkeletonCard from '@components/SkeletonCard/SkeletonCard';

const StoryList: React.FC = () => {
  const { storiesWithAuthors, isLoading, error, refetch } = useHackerNewsStories();

  if (error) {
    return <div className="story-list__error">Error: {error}</div>;
  }

  return (
    <div className="story-list">
      <div className="story-list__header">
        <h2 className="story-list__title">Top-10 Hacker News Stories</h2>
        <button onClick={refetch} className="story-list__refresh-button">
          <span className="story-list__refresh-icon" role="img" aria-label="Refresh">
            🔄
          </span>
        </button>
      </div>
      {isLoading ? (
        Array.from({ length: 10 }).map((_, index) => <SkeletonCard key={index} />)
      ) : storiesWithAuthors.length === 0 ? (
        <div className="story-list__empty">No stories found</div>
      ) : (
        storiesWithAuthors.map(story => <StoryCard key={story.id} story={story} />)
      )}
    </div>
  );
};

export default StoryList;
