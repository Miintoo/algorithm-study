N, M = map(int, input().split())

def is_prime(n):
    if n == 1:
        return False
    for j in range(2, int(n**0.5)+1):
        if n % j == 0:
            return False
    return True

for i in range(N, M+1):
    if is_prime(i):
        print(i)

'''
범위 내의 소수를 출력하는 문제이다.
모든 수를 검사하면 시간 초과가 날 수 있기 때문에 제곱근까지만 검사하도록 했다.
'''