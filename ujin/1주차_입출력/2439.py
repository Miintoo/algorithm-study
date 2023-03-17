N = int(input())
for i in range(N):
    for k in range(N - (i + 1)):
        print(' ', end='')
    for j in range(i+1):
        print('*', end='')
    print()

#다른 방법
'''
N = int(input())
for i in range(N):
    print(' '*(N-i-1),end='')
    print('*'*(i+1))
'''