n = int(input())
num = list(map(int, input().split()))
dp = [0] * n
dp[0] = num[0]

for i in range(1, n):
    dp[i] = max(num[i], dp[i-1] + num[i])

print(max(dp))

'''
현재 값과 이전까지의 합 + 현재 값 중 큰 값을 dp에 저장하여 최댓값을 기록하도록 했다.
'''