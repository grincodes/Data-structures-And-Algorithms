"use strict";
//order move between task
let routineMap = {};
routineMap["wakeup"] = ["brush teeth", "shower"];
routineMap["brush teeth"] = ["eat", "wakeup"];
routineMap["shower"] = [];
routineMap["eat"] = [];
// check if graph is cyclic
// then run a DFS algo to transverse through the graph
function isGraphCyclic(graph, startNode) {
    // start graph from a startnode
    let search_dequeue = [];
    search_dequeue = [...graph[startNode]];
    while (search_dequeue.length) {
        let node = search_dequeue.shift();
        if (node != undefined) {
            if (graph[node].includes(startNode)) {
                return true;
            }
            else {
                isGraphCyclic(graph, node);
            }
        }
    }
}
let res = isGraphCyclic(routineMap, "wakeup");
console.log(res);
let g = new Map();
g.set("key", ["lo"]);
g.get("key");
let s = new Set();
s.add("val");
s.has("val");
