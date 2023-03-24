def DFS(L,sum):
    global count
    if L == N:
        if sum == S:
            count += 1
            return
        return
    else:
        DFS(L+1,sum + number[L])
        DFS(L+1,sum)

N, S = map(int, input().split())
number = list(map(int, input().split()))
count = 0
DFS(0,0)
if S==0:
    print(count-1)
else:
    print(count)

'''
재귀를 통해 나올 수 있는 모든 부분수열에 대해 검사했다. (브루트포스 알고리즘)
구해진 부분수열의 합이 S와 같으면 count값을 증가시키도록 했다.
'''