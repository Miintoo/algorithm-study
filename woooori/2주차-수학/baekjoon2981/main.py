import math

N = int(input())

M_list = []
answer = []

for i in range(N):

    M = int(input())
    M_list.append(M)
M_list.sort()

for i in range(2,int(math.sqrt(M))+1):

    search_list = []
    # 나머지 결과값을 list에 append
    for j in M_list:
        search_list.append(j%i)

    # 결과 값이 같은지 확인 for문

    if search_list == search_list[::-1]:
        answer.append(i)

print(*answer)
