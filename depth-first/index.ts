function DFS(node: string, visited: string[]) {
  // marks the node as visited
  visited.push(node);
  console.log(node);

  for (let i of dfsgraph[node]) {
    if (!visited.includes(i)) {
      DFS(i, visited);
    }
  }
}

function DFS_Disconencted_Graph(node: string, visited: string[]) {
  // marks the node as visited
  visited.push(node);
  console.log(node);

  // if node has no children
  if (!dfsgraph[node].length) {
    DFS(node, visited);
  }

  for (let i of dfsgraph[node]) {
    if (!visited.includes(i)) {
      DFS(i, visited);
    }
  }
  // end of first dfs
}

let dfsgraph: { [index: string]: string[] } = {};
dfsgraph["you"] = ["alice", "bob", "claire"];
dfsgraph["bob"] = ["anuj", "peggy"];
dfsgraph["alice"] = ["peggy"];
dfsgraph["claire"] = ["thom", "jonny"];
dfsgraph["anuj"] = [];
dfsgraph["peggy"] = [];
dfsgraph["thom"] = [];
dfsgraph["jonny"] = [];

DFS("bob", []);
console.log("v2");

DFS_Disconencted_Graph("claire", []);
