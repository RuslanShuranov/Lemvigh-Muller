import React from 'react';
import './SkeletonCard.scss';

const SkeletonCard: React.FC = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-card__image skeleton-pulse"></div>
      <div className="skeleton-card__content">
        <div className="skeleton-card__title skeleton-pulse"></div>
        <div className="skeleton-card__meta">
          <div className="skeleton-card__meta-item skeleton-pulse"></div>
          <div className="skeleton-card__meta-item skeleton-pulse"></div>
        </div>
        <div className="skeleton-card__author">
          <div className="skeleton-card__meta-item skeleton-pulse"></div>
          <div className="skeleton-card__meta-item skeleton-pulse"></div>
        </div>
      </div>
    </div>
  );
};

SkeletonCard.displayName = 'SkeletonCard';
export default SkeletonCard;
