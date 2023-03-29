# * Input: 9
# * 0
# * 1234
# * 1
# * 2
# * 0
# * 0
# * 32
# * 0
#
# * Output:
# * 0
# * 1
# * 2
# * 32

import heapq
import sys

N = int(sys.stdin.readline())
heap = []

for i in range(N):
    x = int(sys.stdin.readline())

    if x == 0:
        if len(heap):
            print(heapq.heappop(heap))
        else:
            print(0)
    else:
        heapq.heappush(heap,x)