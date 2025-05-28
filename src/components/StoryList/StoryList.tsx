import React from 'react';
import StoryCard from '../StoryCard/StoryCard';
import './StoryList.scss';
import { useHackerNewsStories } from '@hooks/useHackerNewsStories';

const StoryList: React.FC = () => {
  const { storiesWithAuthors, isLoading, error } = useHackerNewsStories();

  if (isLoading) {
    return <div className="story-list__loading">Loading stories...</div>;
  }

  if (error) {
    return <div className="story-list__error">Error: {error}</div>;
  }

  return (
    <div className="story-list">
      <h2 className="story-list__title">Top-10 Hacker News Stories</h2>
      {storiesWithAuthors.length === 0 ? (
        <div className="story-list__empty">No stories found</div>
      ) : (
        storiesWithAuthors.map(story => <StoryCard key={story.id} story={story} />)
      )}
    </div>
  );
};

export default StoryList;
