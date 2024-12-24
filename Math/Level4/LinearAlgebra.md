# Linear Algebra

## Introduction

We use an arrow in the symbol of a vector. For example, $\vec{v}$ is a vector.
That's pronounced as "vector v".

![Simple vector](./Img/simple_vector_visualization.png)

## Components of a Vector

A vector has a horizontal component and a vertical component. The horizontal component is called the x-component, and the vertical component is called the y-component.

![vector components visualization](./Img/vector_components_visualization.png)

![same vectors same components](./Img/sameVectorsVisualization.png)

## Vectors and Points

Points and vectors are different. Points are locations in space, while vectors represent directions and magnitudes.

## Adding Vectors

![Combining Vectors](./Img/combining_vectors_diagram.png)

To find the effect of shifting by multiple vectors in order, we can add the vectors.

$$
(a, b) + (c, d) = (a + c, b + d)
$$

![Combining Vectors](./Img/combining_vectors_diagram.png)

For example, consider the following sequence of moves:

$$
x= 2 + (-2) + 3 + (-3) + 4 + (-4) + 5 + (-5) = 0
$$
$$
y= 3 + (-3) + 4 + (-4) + 5 + (-5) + 6 + (-6) = 0
$$

![eight-move sequence](./Img/eight_move_sequence.png)

The sum of these vectors is (0,0).

![Sum vectors is (0,0)](./Img/vector_sum_diagram.png)

We can also visualize the vectors themselves:

![work with the vectors themselves](./Img/vector_representation_graph.png)

And see how they add up in sequence:

![vectors in sequence](./Img/vector_sequence_visualization.png)

## Bringing a Vector Back to the Origin

To bring a vector back to the origin, we can add the negative of the vector.

$$
(a, b) + (-a, -b) = (0, 0)
$$

### Example

$$
(2, 3) + (-2, -3) = (0, 0)
$$

Taking the negative of a vector is the same as flipping it across the origin.

$$
(2, 3) + (4, 2) + (1, -5) = (7, 0)
$$
$$
(2, 3) + (4, 2) + (1, -5) = (2+4+1, 3+2-5) = (7, 0)
$$

If we add the negative of a vector to itself, we get the zero vector.

$$
-(\vec{a} + \vec{b} + \vec{c}) = -\vec{a} - \vec{b} - \vec{c}
$$

## Head to Head

To add vectors head to head, we place the tail of the second vector at the head of the first vector.

![find this unknown vector](unknown_vector_visualization.png)

### Example 1

![Example 1 find this unknown vector](unknown_vector_example.png)

### Example 2

![Example 2 find this unknown vector](unknown_vector_example2.png)


## Length of a Vector

The length of that vector is also the distance from one location to the other. For a vector $\vec{v}, we'll denote the length as $$|\vec{v}|$$

![draw a vector](vector_visualization.png)

## Length of Components

We can find the length of the components of a vector using the Pythagorean theorem.
The length of a vector $\vec{v}$ = (a, b) is:
$$
|\vec{v}| = \sqrt{a^2 + b^2}
$$

![fiend |v|](vector_space_graph.png)

### Example 1:

What is the length of  $\vec{v}$ = (2, -6)?

![Example 1 Length of Components](length_of_components_example_1.png)