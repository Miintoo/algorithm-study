import heapq
import sys

N = int(sys.stdin.readline())
hq = []
res = []

for i in range(N):
    x = int(sys.stdin.readline().rstrip())
    if x == 0:
        if len(hq) == 0:
            res.append(0)
        else:
            res.append(heapq.heappop(hq))
    else:
        heapq.heappush(hq, x)

print(*res, sep='\n')

'''
파이썬의 heapq를 이용하면 쉽게 풀 수 있다.
기본적으로 heapq모듈은 최소 힙 구조이기 때문에 그냥 사용하면 된다.
'''