import sys

input = sys.stdin.readline

N = int(input())
nums = list(map(int, input().split()))
counts = {}

for i in nums:
    x = counts.get(i, -1)
    counts[i] = x + 1
    
results = [-1] * N
stack = [0]
i = 1
while stack and i < N:
    while stack and counts[nums[stack[-1]]] < counts[nums[i]]:
        results[stack[-1]] = nums[i]
        stack.pop()
    stack.append(i)
    i += 1

for i in results:
    print(i, end=' ')