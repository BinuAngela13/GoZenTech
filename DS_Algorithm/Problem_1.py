arr = [1,2,3,4,6,7,8]
# arr = [1,3,4,5,6,7,8,9,10]

n = arr[-1]
total_sum = (n*(n+1))/2
sum = 0

for i in range(len(arr)):
    sum += arr[i]

missing_num = total_sum - sum

print(int(missing_num))