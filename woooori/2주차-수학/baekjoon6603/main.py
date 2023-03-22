# ** Case 1
# * Input:
# * 7 1 2 3 4 5 6 7
# * 0
# * Output:
# * 1 2 3 4 5 6
# * 1 2 3 4 5 7
# * 1 2 3 4 6 7
# * 1 2 3 5 6 7
# * 1 2 4 5 6 7
# * 1 3 4 5 6 7
# * 2 3 4 5 6 7
# * 0 is exit

while (True):
    lottoList = list(map(int,input().split()))
    if lottoList[0] == 0:
        break

    N = 6
    lottoList.pop(0)    # 첫번째 값 pop
    lottoList.sort()    # 오름차순 정렬
    lottoStack = []     # lotto번호를 넣을 list 생성

    # DFS 재귀함수

    def DFS():
        if len(lottoStack) == N:
            print(*lottoStack)
            return

        # lottoStack is Empty
        if len(lottoStack) == 0:
            for i in lottoList:
                lottoStack.append(i)
                DFS()
                lottoStack.pop()
            return

        # lottoStack stack In
        for i in lottoList:
            if i > lottoStack[len(lottoStack)-1]:
                lottoStack.append(i)
                DFS()
                lottoStack.pop()
    
    DFS()
    print()
    
