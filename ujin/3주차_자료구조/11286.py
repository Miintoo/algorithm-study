import heapq
import sys

N = int(sys.stdin.readline())
hq = []
result = []

for _ in range(N):
    x = int(sys.stdin.readline())
    if x == 0:
        if len(hq) == 0:
            result.append(0)
        else:
            result.append(heapq.heappop(hq)[1])
    else:
        heapq.heappush(hq, (abs(x), x))

print(*result, sep='\n')