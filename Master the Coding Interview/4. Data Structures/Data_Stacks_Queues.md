# Data Structures Stacks & Queues

- Stacks and Queues linear data structures

## Stacks Last In First Out (LIFO)

- Stacks are like a stack of plates
- Last item added to the stack is the first item to be removed

![ Stack ](Stack.png)

- Stacks are used in:
  - Managing function invocations
  - Undo / Redo
  - Routing (the history object) is treated like a stack

## Queues First In First Out (FIFO)

- Queues are like a line at a movie theater
- First item added to the queue is the first item to be removed
- Queues are used in:
  - Background tasks
  - Uploading resources
  - Printing / Task processing

![ Queue ](Queue.png)

## Array Vs Stack and Queue

| Operation | Array | Stack | Queue |
| ---       | ---   | ---   |  ---  |
| Lookup    | O(1)  | O(n)  | O(n)  |
| Push      | O(n)  | O(1)  | O(1)  |
| Pop       | O(n)  | O(1)  | O(1)  |
| Shift     | O(n)  | O(n)  | O(1)  |
| Unshift   | O(n)  | O(n)  | O(n)  |

## Stack Implementation

```javascript

// Browser history stack
// google.com
// udemy.com
// youtube.com

youtube  // pop
udemy    // pop
google   // pop

// Why not use an array?
// We can use an array but we want to restrict the operations to push and pop only

// Why not use Linked List?
// We can use a linked list but it's an overkill for this problem

// Why not use a Queue?
// because we want to remove the last item added to the stack
