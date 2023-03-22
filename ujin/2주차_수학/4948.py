n = 123456 * 2 + 1
check = [1] * n

for i in range(2, int(n**0.5)+1):
    if check[i]:
        for j in range(i*2, n, i):
            check[j] = 0

check[0] = 0
check[1] = 0

while True:
    number = int(input())
    if number == 0:
        break

    count = 0
    for i in range(number + 1, number * 2 + 1):
        if check[i]:
            count += 1
    print(count)

'''
이 문제의 경우 n의 범위가 정해져 있고, 테스트케이스가 여러개이다.
따라서 에라토스테네스의 체를 활용해 모든 범위 내의 소수를 미리 찾은 후,
각 테스트케이스 별 범위에서 표시한 소수의 갯수를 찾아 출력하도록 했다.
'''