---
title: "Reflection on Rusty-Ocaml"
description: Read Some Flambda Compiler
date: 02-07-2023
modified: 02-07-2023
isdraft: false
image: "header/ReflectionOcaml.png"
pined: false
tags: ['Programming', 'Ocaml', 'Rust']
---
> 💬 This Blog is written with the help of `GPT4`!

After finishing Chapter 10 of **The Rust Book**, I started actually read these two [articles](https://blog.janestreet.com/oxidizing-ocaml-locality/)(with the thought that I may actually understand the *"axis"* this time.)

## What is Flambda Project
> [Proposal: data-race freedom by JaneStreet](https://github.com/ocaml-flambda/ocaml-jst/blob/main/jane/doc/proposals/data-race-freedom.md): We would like to provide a programming model for shared-memory parallelism in OCaml that is less terrifying than the free-for-all you get in languages like Java, C, C++ and Go. In particular, we intend to statically prevent data races. We define a data race as two or more threads concurrently accessing a non-atomic memory location where at least one of the accesses is a write.

Flambda Compiler is JaneStreets' take on solving data race by developing their own fork of Ocaml compilers, adding new features such as would be talked in this blog.


## Summary of the blogs
Below are 3 axis introduced in JaneStreet `Flambda Compiler` Project:
1. **Locality Axis**: This axis has two modes - `local` and `global`.

- **Local**: A local variable is one that cannot escape its enclosing region and may refer to the stack. This is useful when you want to allocate a variable that has a short lifespan and you want to avoid the overhead of garbage collection. For example, a variable used inside a loop that doesn't need to exist after the loop finishes could be declared as local.
    ```ocaml
    (* ✅ This is fine*)
    let is_empty (local str) =
        String.length str = 0
    ;;
    val is_empty : string @ local -> bool
    (* ❌ This disobey the locality*)
    let id(local str) =
        str
    ;;
    3 | str
         ^
    Error: this value escapes its region.
    ```


- **Global**: A global variable can escape any region and always reference the heap. This is useful when you want to create a variable that needs to persist beyond the scope of the current function. For example, a variable that holds configuration data that needs to be accessed by multiple functions could be declared as global.

2. **Uniqueness Axis**: This axis has three modes - `unique`, `shared`, and `exclusive`.

- **Unique**: A unique variable is the only reference to a particular value in the entire program. This is useful when you want to ensure that a variable can be mutated without affecting other parts of the program. For example, a variable that holds a large data structure that needs to be updated in place could be declared as unique.
    ```ocaml
    let clear (unique box) =
        { overwrite box with x = None }
    ;;
    val clear : 'a box @ unique -> 'b box @ unique
    ```

- **Shared**: A shared variable can have multiple references. This is useful when you want to create a variable that can be accessed from multiple parts of the program. For example, a variable that holds a shared resource, like a database connection, could be declared as shared.

- **Exclusive**: An exclusive variable is the only active reference to a particular value, but it may not be used uniquely. This is useful when you want to ensure that a variable can be mutated without affecting other parts of the program, but you don't need the strong guarantees of uniqueness. For example, a variable that holds a buffer that is being written to by a single function could be declared as exclusive.

3. **Linearity Axis**: This axis has three modes - once, many, and separate.

- **Once**: A variable with mode once can be used at most once. This is useful when you want to ensure that a variable is consumed by its use and cannot be used again. For example, a variable that holds a token for a one-time operation could be declared as once.

- **Many**: A variable with the default mode many does not have this restriction; it may be used freely. This is useful when you want to create a variable that can be used multiple times. For example, a variable that holds a reusable resource, like a thread pool, could be declared as many.

- **Separate**: A separate closure may be invoked repeatedly, but only one invocation can be active at any point in time. This is useful when you want to create a function that can be called concurrently, but you want to ensure that only one call is active at a time. For example, a function that updates a shared resource could be declared as separate.


## Reflection 

I haven't get chance to run the flambda ocaml compiler myself, would try to install on a `NixOS` VM and take a shot. There is a great video between TJ(creater of `telescope.nvim`) and PrimeGen, you could take a look!