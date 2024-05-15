arr = [1,2,3,4,5,6,7]
k = 3

reverse = arr[::-1]

rev = reverse[:k][::-1]+ reverse[k:][::-1]


print(rev)