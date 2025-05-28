export const getRandomStoryIds = (storyIds: number[], count: number): number[] => {
  if (storyIds.length === 0) return [];
  const shuffled = [...storyIds].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getFulfilledResults = <T>(results: PromiseSettledResult<T>[]): T[] => {
  return results
    .filter((result): result is PromiseFulfilledResult<T> => result.status === 'fulfilled')
    .map(result => result.value);
};
