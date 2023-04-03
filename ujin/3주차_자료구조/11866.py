import sys
from collections import deque

N, K = map(int,sys.stdin.readline().split())
queue = deque(i for i in range(1, N+1))
res = []

while True:
    if len(queue) == 0:
        break
    else:
        for _ in range(K-1):
            queue.append(queue.popleft())
        res.append(queue.popleft())

print('<', end='')
print(*res, sep=', ', end='')
print('>', end='')

'''
반복문을 돌면서 앞에서부터 k-1 명의 사람들은 뒤로 다시 들어가고, k번째 사람은 제거해야 한다.
따라서 선입선출 방식의 queue로 문제를 풀었다.
'''