graph = [
    [],
    [2],
    [6,8],
    [6],
    [8],
    [8],
    [2,3],
    [8],
    [2,4,5,7]
]

visited = [False]*9

def bfs(graph, start, visited):
    from collections import deque
    queue = deque([start])
    visited[start] = True
    while queue:
        v = queue.popleft()
        print(v, end=' ')
        for i in graph[v]:
            if not visited[i]:
                queue.append(i)
                visited[i] = True

#TEST

bfs(graph, 1, visited)