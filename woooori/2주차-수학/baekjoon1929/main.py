# ** Case 1
# *
# * Input:
# * 3 16
# *
# * Output:
# * 3
# * 5
# * 7
# * 11
# * 13

M, N = map(int,input().split())

for i in range(M,N+1):

    if i == 1:
        continue

    else:
        for j in range(2,int(i**0.5)+1):
            if i%j == 0:
                break
        else:
            print(i)