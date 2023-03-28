import sys

input = sys.stdin.readline
n = int(input())
stack = []
result = []

for i in range(n):
    x = input().rstrip().split()
    if x[0] == 'push':
        num = x[1]
        stack.append(num)
    elif x[0] == 'pop':
        if stack:
            result.append(stack.pop())
        else:
            result.append(-1)
    elif x[0] == 'size':
        result.append(len(stack))
    elif x[0] == 'empty':
        if stack:
            result.append(0)
        else:
            result.append(1)
    elif x[0] == 'top':
        if stack:
            result.append(stack[-1])
        else:
            result.append(-1)
print(*result, sep='\n')

'''
문제에서 제시한 명령의 경우에 따라 코드를 작성했다.
시간제한이 0.5초이기 때문에 그냥 input으로 입력을 받으면 시간초과가 날수도 있을 것 같아서
input = sys.stdin.readline으로 입력받았다.
또, 명령이 push일 경우에는 숫자도 입력받아야 하므로 split으로 입력받고 조건문에서 인덱스를 활용했다.
'''