def DFS(L, s):
    if L == 6:
        print(*res)
        return

    else:
        for i in range(s, K):
            res[L] = S[i]
            DFS(L+1,i+1)

while True:
    number = list(map(int, input().split()))
    if number[0] == 0:
        break
    K = number[0]
    S = number[1:]

    res = [0] * 6
    DFS(0, 0)
    print()

'''
K (6<K<13) 개의 수 중 6개의 숫자를 골라 조합하는 문제이다.
문제에서 S의 원소는 오름차순으로 주어진다고 했으므로 따로 sort는 사용하지 않았다.
DFS를 이용해 조합을 구하고자 했고, 이때 중복이 없어야 하므로 DFS를 재귀호출 할 때
s의 값을 i+1을 해줌으로써 이전에 선택한 인덱스의 다음 인덱스부터 for문이 돌도록 했다.
'''