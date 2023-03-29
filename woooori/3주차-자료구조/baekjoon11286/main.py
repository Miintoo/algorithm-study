# * Input:
# * 7
# * pop
# * top
# * push 123
# * top
# * pop
# * top
# * pop
# *
# * Output:
# * -1
# * -1
# * 123
# * 123
# * -1
# * -1

import sys

N = int(sys.stdin.readline())
stack = []

for i in range(N):
    order = sys.stdin.readline().split()

    if order[0] == 'push':
        stack.append(int(order[1]))

    elif order[0] == 'top':
        if len(stack) == 0:
            print(-1)
        else:
            print(stack[-1])

    elif order[0] == 'size':
        print(len(stack))

    elif order[0] == 'pop':
        if len(stack) == 0:
            print(-1)
        else:
            print(stack.pop())

    elif order[0] == 'empty':
        if len(stack) == 0:
            print(1)
        else:
            print(0)