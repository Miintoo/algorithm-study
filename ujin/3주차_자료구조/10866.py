import sys
from collections import deque

N = int(sys.stdin.readline())
deque = deque()
result = []

for _ in range(N):
    x = sys.stdin.readline().rstrip().split()
    order = x[0]
    if order == 'push_front':
        deque.appendleft(x[1])

    elif order == 'push_back':
        deque.append(x[1])

    elif order == 'pop_front':
        if len(deque) > 0:
            result.append(deque.popleft())
        else:
            result.append(-1)

    elif order == 'pop_back':
        if len(deque) > 0:
            result.append(deque.pop())
        else:
            result.append(-1)

    elif order == 'size':
        result.append(len(deque))

    elif order == 'empty':
        if len(deque) > 0:
            result.append(0)
        else:
            result.append(1)

    elif order == 'front':
        if len(deque) > 0:
            result.append(deque[0])
        else:
            result.append(-1)

    elif order == 'back':
        if len(deque) > 0:
            result.append(deque[-1])
        else:
            result.append(-1)

print(*result, sep='\n')

'''
시간제한이 0.5초이기 때문에 그냥 input으로 입력을 받으면 시간초과가 날수도 있을 것 같아서 sys.stdin.readline으로 입력받았다.
또, 명령이 push일 경우에는 숫자도 입력받아야 하므로 split으로 입력받고 조건문에서 인덱스를 활용했다.
queue의 가장 앞에 있는 정수도 빼야하기 때문에 list를 사용하는 것보다 deque를 사용하는 것이 시간복잡도가 더 나을 것이라고 생각했다. 
'''