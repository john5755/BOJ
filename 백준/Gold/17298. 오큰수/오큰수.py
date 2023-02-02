import sys

input = sys.stdin.readline

N = int(input())
numarr = list(map(int, input().split()))
results = [-1 for _ in range(N)]
stack = [0]
i = 1

while stack and i < N:
    while stack and numarr[stack[-1]] < numarr[i]:
        results[stack[-1]] = numarr[i]
        stack.pop()
    stack.append(i)
    i += 1
        
 
for i in results:
    print(i, end=' ')