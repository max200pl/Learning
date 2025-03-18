# Strings Rust and formatting

`:?` is a debug formatter that can be used to print out the contents of a variable. This is useful for debugging and seeing what is inside a variable.

```rust
fn main() {
    let dec = vec![1, 2, 3, 4, 5];
    println!("Heres your deck: {:?}", deck);
}
```
