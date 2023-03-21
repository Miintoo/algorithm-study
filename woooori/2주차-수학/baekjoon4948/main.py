# ** Case 1
# *
# * Input:
# * 1
# * 10
# * 13
# * 100
# * 1000
# * 10000
# * 100000
# * 0 exit
# *
# * Output:
# * 1
# * 4
# * 3
# * 21
# * 135
# * 1033
# * 8392

# * Explain :
# ** sqrt : 제곱근을 반환하는 math함수

from math import sqrt

while True:

    N = int(input())
    End = 2*N   # for문 범위 변수

    count = 0   # 소수 count

    if N == 0:  # 0일시 quit
        break

    for i in range(N, End+1):   # N~2N범위 지정

        if i == 1:              # 1이면 제외
            continue

        elif i == 2:            # 2는 소수라서 탐색 필요 x
            count += 1

        else:                   # 1,2를 제외한 나머지 수들
            for j in range(2, int(sqrt(i)+1)):  # 제곱근 범위를 이용해서 소수찾기 중복줄임
                if i % j == 0:                  # 나누어 떨어지면 break
                    break
            else:                               # break에 안걸렸을 시 count 즉, 소수를 찾았을 시 else문에 걸린다.
                count += 1

    print(count)