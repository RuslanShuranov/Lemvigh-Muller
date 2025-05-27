import { User } from './user';

export interface Story {
  id: number;
  title: string;
  url: string;
  time: number;
  score: number;
  by: string;
  type: string;
  descendants?: number;
  kids?: number[];
}

export interface StoryWithAuthor extends Story {
  author: User;
}
