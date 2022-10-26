## Binary Search 
search a sorted list by checking the value of mid point
and comparing the search value to know where the section falls.
on each iteration the list is always split into half.
O(n) = logn

## Selection sort
sorts an array in ascending order , 
checks for the smallest number in an array by picking an element 
in the array and checking if its the smallest
once the smallest number is gotten . 
it is immedieately pushed to a new array and poped off the list that
needs to be sorted , thereby reducing the number of items in the list 
O(n) = n2

## Recurssion
A function that call itself until a base condition is met
using while loop is better performance wise but recurssion is cleanner 
to the programmer


## Quick sort
is a sorting algorthim that uses recurssion to sort an array of items
it only knows how to sort an array that contain two items.
so it tries to reduce the array till it gets to two or less than two items
how does it do this (for list > 2):
**Recurssion**: it keeps running the **Base Process** till the items in a sub array is <=2
then it swaps at that point .

**Base Process**: it  picks a pivot item in the array 
and finds elements that are smaller and larger than the pivot
the result of this is a subArray of items smaller than pivot
and a subArray of items larger than pivot this is called partioning
Now we have:
- subArray of items smaller than pivot
- pivot
- subArray of items larger than pivot

**Final Result**
Join all sorted Subarrays of item 
Average case = O(n)= nlogn
Worst case = O(n)=n2

## Hash map
is a special type of list that uses a hash function to place position
items on the list . The hash function takes an input and generates a 
hash or number that is now used as the position of the input. This
makes it possible to retrieve an item on the list in instant time because 
we can determine the position of an item by runnnig it through the hash function
Average case = O(n) = 1
Worst case = O(n) = n

## Breadth first search
checks if a item is present in a network
path of node a to node b
checks the shortest path or distance to that item
Graph is a set of connection between nodes which can be represented 
using a map.
how it works

it uses a queue 

push all sub nodes of a starting point node into a queue
these are usually the first connections or better put direct
connections to the starting point node.

loop through the list and check if any of the child node
meets the search requirement.
if it doesnt't meet requirements add all its children to the queue,
pop it off the queue and add it
to the searched list .
the search list help maintain the queue as well to make sure you dont search 
the same item twice.

continue this process till the queue is empty
O(n) = (vertex + edge)

## Deep First 
An algorithm used for transversing a tree or map.
params : node and visited array.
it takes a root/start node 
***CYCLE***
 prints CURRENT NODE and marks it as visited
then it picks the first child of the node
checks if child node is not already visited if not  start cycle 
***CYCLE***
then runs a recursive dfs on its child node (meaning it goes through 
the same cycle for the child)

if child doesn't have a child select its parent and run  ***CYCLE***
O(n)= v+e


## Topological sort
moving through a tree(acyclic graph ) in a particular order

## Dijkstra 


## Hoffman 
efficient compression of data without loosing informaton 
this is achieved by based on binary frequency tree
by analyzing frequency in a message.
symbols  that appear more are encoded with shorter string

a frequency map is constructed based on the input string
***CYCLE***
then least frequent symbols are added together and thier parent 
will be thier sum.
these values are replaced on a frequency map has a node
with each node having left and right props
***CYCLE***
this cycle repeats it self on the frequency map till one root
node is left. 

encoding and decoding of a string is done by traversing the tree
and assiging a value any stop on left and right node before getting to 
destination node.


## Binary Search Tree (BST)
binary search tree is a node based binary tree which has the following
props : the left subtree of a node only contains the nodes with keys
lesser than the root node
the right subtree only contain nodes with keys greater than the root node
the left and right subtree each must be a binary tree
 **Insert BTS**
 add key to tree;
 check the if root is not set create root node from key
 if root is set 
 check if key < root.key 
 add node of key to root.left
 vice versa  for greater than 
 add to root.right 

 **Delete BTS**
 if key to delete is a root node go ahead and delete
 if key node to be deleted has only one child copy child node to node and delete child node
 if key node to be deleted has two child node 
 select the right child node and get the smallest value in the node
 














