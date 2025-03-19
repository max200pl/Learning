# Fundamentals concepts of Rust

- [Fundamentals concepts of Rust](#fundamentals-concepts-of-rust)
  - [Introduction](#introduction)
  - [Rust Compiler](#rust-compiler)
  - [Cargo](#cargo)
  - [Arrays VS Vectors](#arrays-vs-vectors)

## Introduction

Rust is a systems programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety. Rust is a multi-paradigm programming language focused on performance and safety, especially safe concurrency. Rust is syntactically similar to C++, but it provides increased speed and better memory safety.

## Rust Compiler

Rust has a compiler that is written in Rust. The compiler is called rustc. The compiler is responsible for compiling the Rust code into machine code that can be executed by the computer.

## Cargo

Cargo is the package manager for Rust. It is used to compile, test, and run Rust code. Cargo is also used to manage dependencies in Rust projects.

```bash
# Check if Cargo is installed
cargo --version
# Create a new Rust project
```

## Arrays VS Vectors

![alt text](./img/Arrays VS Vectors.png)

Arrays and vectors are both used to store multiple values in Rust. However, there are some differences between the two.

- Arrays have a fixed size, while vectors can grow and shrink in size.
- Arrays are allocated on the stack, while vectors are allocated on the heap.

```rust
fn main() {
    // Array
    let arr = [1, 2, 3, 4, 5];
    // Vector
    let vec = vec![1, 2, 3, 4, 5];
}
```
