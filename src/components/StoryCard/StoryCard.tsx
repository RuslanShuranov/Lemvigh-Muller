import React from 'react';
import { StoryWithAuthor } from '@/types/story';
import './StoryCard.scss';

interface StoryCardProps {
  story: StoryWithAuthor;
}

const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  const formatDate = (timestamp: number): string => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
  };

  return (
    <div className="story-card">
      <div className="story-card__image">
        <img src="/logo192.png" alt="Story thumbnail" />
      </div>
      <div className="story-card__content">
        <h3 className="story-card__title">
          <a href={story.url} target="_blank" rel="noopener noreferrer">
            {story.title}
          </a>
        </h3>
        <div className="story-card__meta">
          <div className="story-card__meta-item">
            <span className="story-card__label">Score:</span>
            <span className="story-card__value">{story.score}</span>
          </div>
          <div className="story-card__meta-item">
            <span className="story-card__label">Posted:</span>
            <span className="story-card__value">{formatDate(story.time)}</span>
          </div>
        </div>
        <div className="story-card__author">
          <div className="story-card__meta-item">
            <span className="story-card__label">Author:</span>
            <span className="story-card__value">{story.by}</span>
          </div>
          <div className="story-card__meta-item">
            <span className="story-card__label">Karma:</span>
            <span className="story-card__value">{story.author.karma}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

StoryCard.displayName = 'StoryCard';
export default StoryCard;
