/*

You are given an integer array coins representing coins of different denominations 
and an integer amount representing a total amount of money.
Return the fewest number of coins that you need to make up that amount. 
If that amount of money cannot be made up by any combination of the coins, return -1.
You may assume that you have an infinite number of each kind of coin.

Example 1:
Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

*/

function coinChange(coins, amount){
	const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for(let i=0; i<= amount; i++){
		for(let coin of coins){
			if(i - coin >= 0 && dp[i-coin] !== Infinity){
				dp[i] = Math.min(dp[i],dp[i - coin]+1);
			}
		}
	}
  return dp[amount] === Infinity ? -1 : dp[amount];
}

console.log(coinChange([1,2,5, 10], 10));