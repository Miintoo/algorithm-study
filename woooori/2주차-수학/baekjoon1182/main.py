# * Input:
# * 5 0
# * -7 -3 -2 5 8
# * Output:
# * 1

from itertools import combinations

N, S = map(int,input().split())
array = list(map(int,input().split()))

count = 0

for i in range(1,N+1):
    for number in list(combinations(array,i)):
        if sum(number) == S:
            count += 1

print(count)