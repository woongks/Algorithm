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

def dfs(graph, v, visited):
    visited[v] = True
    print(v, end=' ')
    for i in graph[v]:
        if not visited[i]:
            dfs(graph, i, visited)

#TEST

dfs(graph, 1, visited)