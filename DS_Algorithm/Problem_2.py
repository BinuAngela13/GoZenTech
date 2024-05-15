arr = [1, 1, 2, 2, 3, 4, 4, 5]
arr = [1, 1, 1, 2, 2, 3, 3, 3, 4, 5]

i = 0
for j in range(1, len(arr)):
    if arr[j] != arr[i]:
        i += 1
        arr[i] = arr[j]
   
del arr[i+1:]
            
print(len(arr), arr)