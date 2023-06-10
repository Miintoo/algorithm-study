n = int(input())
tri = [list(map(int, input().split())) for _ in range(n)]

dp = [[0] * n for _ in range(n)]
dp[0][0] = tri[0][0]

k = 2
for i in range(1, n):
    for j in range(k):
        if j == 0:
            dp[i][j] = dp[i - 1][j] + tri[i][j]
        elif i == j:
            dp[i][j] = dp[i - 1][j - 1] + tri[i][j]
        else:
            dp[i][j] = max(dp[i - 1][j - 1], dp[i - 1][j]) + tri[i][j]
    k += 1

print(max(dp[n-1]))

'''
각 자리에 올 수 있는 가장 큰 값을 dp에 저장하고, 마지막 줄의 숫자 중 최댓값을 출력하도록 했다.
'''
