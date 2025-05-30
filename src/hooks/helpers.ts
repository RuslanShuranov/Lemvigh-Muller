export const getRandomStoryIds = (
  storyIds: number[],
  count: number
): number[] => {
  if (storyIds.length === 0) return [];
  const shuffled = [...storyIds].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
