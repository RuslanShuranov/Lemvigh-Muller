import { User } from './user';

export interface Story {
  id: number;
  title: string;
  url: string;
  time: number;
  score: number;
  by: string;
}

export interface StoryWithAuthor extends Story {
  author: User;
}
