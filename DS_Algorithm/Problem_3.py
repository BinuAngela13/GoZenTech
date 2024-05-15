n = 10
factorial = 1

if(n==0 or n==1):
    print(factorial)
else:
    for i in range(n,1,-1):
        factorial *= i
    print(factorial)