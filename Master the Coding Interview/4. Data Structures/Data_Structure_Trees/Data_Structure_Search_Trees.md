
# Binary Search Trees

[link visualgo search trees](https://visualgo.net/en/bst?slide=1)

![Trees Big(0)](<./src/Trees Big(0).png>){width=70% height=70%}

1. A binary search tree is a binary tree in which every node fits a specific ordering property:
     1. All left descendants <= n < all right descendants
     2. This must be true for each node n

## Balanced vs Unbalanced

- **Balanced**: O(log n)
- **Unbalanced**: O(n)

## Balanced Trees

1. AVL Trees
   - **Adelson-Velsky and Landis**
   - A self-balancing binary search tree
2. Red-Black Trees
   - A self-balancing binary search tree

## Binary Search VS Array

| Binary Search Trees | Arrays |
|---------------------|--------|
| Better for insertion and deletion | Better for lookups |
| No need to shift elements | Have to shift elements |
| No need to resize | Have to resize |

## Binary Search Trees VS Hash Tables

| Binary Search Trees | Hash Tables |
|---------------------|-------------|
| Ordered | Unordered |
| Comparisons | No comparison |
| No O(1) lookups | O(1) lookups |

## Example 1 Write own Binary Search Tree Class

``` javascript
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  lookup(value) {
    if (!this.root) return false;
    let current = this.root;
    while (current) {
      if (value < current.value) {
        // Left
        current = current.left;
      } else if (value > current.value) {
        // Right
        current = current.right;
      } else if (current.value === value) {
        // Found
        return current;
      }
    }
    return false;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        // Left
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        // Right
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  remove(value) {
    if (!this.root) {
      return false;
    }
    let current = this.root;
    let parent = null;
    while (current) {
      if (value < current.value) {
        parent = current;
        current = current.left;
      } else if (value > current.value) {
        parent = current;
        current = current.right;
      } else {
        // We have a match, get to work!
        // Option 1: No right child:
        if (current.right === null) {
          if (parent === null) {
            this.root = current.left;
          } else {
            // if parent > current value, make current left child a child of parent
            if (current.value < parent.value) {
              parent.left = current.left;
              // if parent < current value, make left child a right child of parent
            } else if (current.value > parent.value) {
              parent.right = current.left;
            }
          }
          // Option 2: Right child which doesn't have a left child
        } else if (current.right.left === null) {
          current.right.left = current.left;
          if (parent === null) {
            this.root = current.right;
          } else {
            // if parent > current, make right child of the left the parent
            if (current.value < parent.value) {
              parent.left = current.right;
              // if parent < current, make right child a right child of the parent
            } else if (current.value > parent.value) {
              parent.right = current.right;
            }
          }
          // Option 3: Right child that has a left child
        } else {
          // find the Right child's left most child
          let leftmost = current.right.left;
          let leftmostParent = current.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }
          // Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = current.left;
          leftmost.right = current.right;
          if (parent === null) {
            this.root = leftmost;
          } else {
            if (current.value < parent.value) {
              parent.left = leftmost;
            } else if (current.value > parent.value) {
              parent.right = leftmost;
            }
          }
        }
      }
    }

    breadthFirstSearch() {
        let currentNode = this.root;
        let list = [];
        let queue = [];
        queue.push(currentNode);

        while (queue.length > 0) {
            currentNode = queue.shift();
            list.push(currentNode.value);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return list;
    }

    // Breadth First Search Recursive

    breadthFirstSearchR(queue, list) {
        if (!queue.length) {
            return list;
        }
        const currentNode = queue.shift();
        list.push(currentNode.value);

        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }
        return this.breadthFirstSearchR(queue, list);
    }

    // DFS Depth First Search In Order (left, root, right)

    depthFirstSearchInOrder() {
        return traverseInOrder(this.root, []);
    }

    // DFS Depth First Search Pre Order (root, left, right)

    depthFirstSearchPreOrder() {
        return traversePreOrder(this.root, []);
    }

    // DFS Depth First Search Post Order (left, right, root)

    depthFirstSearchPostOrder() {
        return traversePostOrder(this.root, []);
    }
}

function traverseInOrder(node, list) {
    console.log(node.value);
    if (node.left) {
        traverseInOrder(node.left, list);
    }
    list.push(node.value);
    if (node.right) {
        traverseInOrder(node.right, list);
    }
    return list;
}

function traversePreOrder(node, list) {
    console.log(node.value);
    list.push(node.value);
    if (node.left) {
        traversePreOrder(node.left, list);
    }
    if (node.right) {
        traversePreOrder(node.right, list);
    }
    return list;
}

function traversePostOrder(node, list) {
    console.log(node.value);
    if (node.left) {
        traversePostOrder(node.left, list);
    }
    if (node.right) {
        traversePostOrder(node.right, list);
    }
    list.push(node.value);
    return list;
}

//        9
//    4       20
//  1   6  15   170

const tree = new BinarySearchTree();
tree.insert(9); // root O(1) time complexity and O(1) space complexity
tree.insert(4); // left of root O(log n) time complexity and O(1) space complexity
tree.insert(6); // right of 4 O(log n) time complexity and O(1) space complexity
tree.insert(20); // right of root O(log n) time complexity and O(1) space complexity
tree.insert(170); // right of 20 O(log n) time complexity and O(1) space complexity
tree.insert(15); // left of 20 O(log n) time complexity and O(1) space complexity
tree.insert(1); // left of 4 O(log n) time complexity and O(1) space complexity
tree.lookup(170);  // Node { value: 170, left: null, right: null } O(log n) time complexity and O(1) space complexity
tree.breadthFirstSearch();  // [9, 4, 20, 1, 6, 15, 170] O(n) time complexity and O(n) space complexity
tree.breadthFirstSearchR([tree.root], []); // [9, 4, 20, 1, 6, 15, 170] O(n) time complexity and O(n) space complexity
console.log(tree.depthFirstSearchInOrder()); // [1, 4, 6, 9, 15, 20, 170] O(n) time complexity and O(n) space complexity
console.log(tree.depthFirstSearchPreOrder()); // [9, 4, 1, 6, 20, 15, 170] O(n) time complexity and O(n) space complexity
console.log(tree.depthFirstSearchPostOrder()); // [1, 6, 4, 15, 170, 20, 9] O(n) time complexity and O(n) space complexity
```

JSON.stringify(traverse(tree.root));

//        9
//    4       20
//  1   6  15   170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

```
