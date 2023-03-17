month=[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
week=['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
a, b = map(int,input().split())
n = a - 1 #1월 1일과의 월 차이
m = b - 1 #1월 1일과의 일 차이
sum = 0
for i in range(0,n):
    sum+=month[i]
sum+=m
result = sum % 7
print(week[result])