function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    const complementIndex = nums.indexOf(complement);

    if (complementIndex !== -1 && complementIndex !== i) {
      return [i, complementIndex];
    }
  }

  return [];
}
