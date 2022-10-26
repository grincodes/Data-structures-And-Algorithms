"use strict";
function breadthFirst(name) {
    var _a;
    let search_dequeue = [];
    //put all the direct child of a node to a queue
    search_dequeue = [...graph[name]];
    //create a list that holds searched nodes
    let searched = [];
    // check if queue is empty
    while (search_dequeue.length) {
        // get an item off the queue
        let person = search_dequeue.pop();
        if (person != undefined) {
            //check if it is already searched
            if (!searched.includes(person)) {
                if (person_is_seller(person)) {
                    console.log(person);
                    return true;
                }
                else {
                    // add all the children of the selected child node
                    if ((_a = graph[person]) === null || _a === void 0 ? void 0 : _a.length) {
                        search_dequeue = [...graph[person]];
                        searched.push(person);
                    }
                }
            }
        }
    }
}
function person_is_seller(person) {
    return person.includes("pegg");
}
let graph = {};
graph["you"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = [];
breadthFirst("bob");
