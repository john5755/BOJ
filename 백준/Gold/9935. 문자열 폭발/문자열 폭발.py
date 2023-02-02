import sys

input = sys.stdin.readline

target = input().rstrip()
bomb = input().rstrip()
stack = []

for i in range(len(target)):
    stack.append(target[i])
    if stack[-1] == bomb[-1] and ''.join(stack[-len(bomb):]) == bomb:
        del stack[-len(bomb):]
        
if stack:
    print(''.join(stack))
else:
    print('FRULA')

