dp = [0] * 11
dp[1] = 1  # 1
dp[2] = 2  # 1+1 / 2
dp[3] = 4  # 1+1+1 / 1+2 / 2+1 / 3

for i in range(4, 11):
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]

T = int(input())
for _ in range(T):
    n = int(input())
    print(dp[n])

'''
규칙을 이용해서 풀었다.
만약 n이 4라면
3일때의 경우들에 +1한것, 2일때의 경우들에 +2한것, 1일때의 경우들에 +3한것을 모두 합하면 된다.
'''