N = int(input())
for i in range(N):
    for j in range(i+1):
        print('*', end='')
    print()

#다른 방법
'''
N = int(input())
for i in range(N):
    print('*'*(i+1))
'''