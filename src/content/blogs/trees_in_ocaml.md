---
title: "Trees in Ocaml"
description: Tress in Ocaml
date: 17-05-2023
modified: 18-05-2023
image: "header/tree_ocaml.png"
pined: false 
tags: ['Tree', 'Ocaml', 'Algorithm']
---

## Intro briefly
code links: [ocaml_tree_implementation](https://github.com/Frank-III/blog_code/tree/1d84e5465135898c47403b11705657603e3e9eb5/tree_hw)

I took [CS61a](https://cs61a.org/) about 4 years ago, a really good intro course for programmer/potential programmer. These day, I have been playing around with **Ocaml,** I would reimplement the tree structure and solve those questions that I scratched my head a lot to strength some basic knowledge in Ocaml. I will start with two most used/popular tree structure Binary Tree and more general tree:
```ocaml
(** Binary Tree *)
type 'a btree = 
  | Leaf of 'a
  | Tree of 'a * 'a btree * 'a btree

(** General Tree *)
type 'a tree = 
  | Leaf of 'a
  | Tree of 'a * 'a tree list
```
## Start with [HW4](https://cs61a.org/hw/hw04/#mobiles)

![mobile_structure.png](/personal_site/images/content/mobiles.png)

Start by implementing the structure for `Mobile`, `Arm`s shoule have property `len` and connect to either a `Planet` or a `Mobile` and `Mobile` should connect to 2 `Arms` therefore, the design of data struture would be like this(A good example of using mutually recursive types here):
```ocaml
type 'a arm = 'a * 'a mobile 

and 'a mobile = | Planet of 'a | Mobile of 'a arm \* 'a arm ;;
```
PS: We do have to define `getter` and `setter` for each type as we have ADTs and could make use of pattern matchings which simplify things a lot.

And then it comes **Q1**

```ocaml
(** Return the total weight ofm, a planet or mobile. \*) 
let rec total_weight = function 
  | Planet x -> x 
  | Mobile (left, right) -> (arm_weight left) + (arm_weight right) 

and arm_weight arm =
  let _, connected = arm in (total_weight connected) ;;
```
then, **Q2**

```ocaml
let balanced = function 
  | Planet _ -> true 
  | Mobile ((len_l, rod_l), (len_r, rod_r)) -> 
  len_l * (total_weight rod_l) = len_r * (total_weight rod_r)
```

with pattern matching, things become way clearer.

When it comes to **Q3,** things finally become more related to tree:

- we should define `print_tree` first, as mobile is a binary tree, first give the definition of how to print a binary tree:
  ```ocaml
  let print_tree t = 
    let open Core in 
    let repeat_str n str = 
      let rec repeat_tail sum = function 
      | 0 -> sum 
      | x -> repeat_tail (sum ^ str) (x-1) in 
    repeat_tail "" n in 
    let rec print_w_indent indent = function 
    | Leaf a -> print_endline ((repeat_str indent " ") ^ (Int.to_string a)) 
    | Tree (v, left, right) -> 
      print_endline ((repeat_str indent " ") ^ (Int.to\_string v)); 
      (print_w_indent (indent + 2) left); 
      (print_w_indent (indent + 2) right); 
      in print_w_indent 0 t;;
  ```

Ocaml does not come with easily-used string concatenation like `"str"*n` in python, have to define one ourselves either use **tail recursion** or `String.concat (List.init (fun _ -> str) n)`

- The `totals_tree`:
  ```ocaml
  let total_trees t =
    let open Btree in 
    let rec con_sum_tree = function 
    | Planet x -> Leaf x 
    | Mobile ((_, rod_l), (_, rod_r)) as x -> 
      Tree ((total_weight x), (con_sum_tree rod_l), (con_sum_tree rod_r))
    in con_sum_tree t;;
    ;;
  ``` 

### More Tree Questions
```ocaml
let rec replace_loki_at_leaf t lokis_replacement= 
  match t with 
  | (Leaf a) as l -> 
    (if a = "loki" then (Leaf lokis_replacement) else l)
  | Tree (v, trees) -> 
    Tree (
      (if v = "loki" then lokis_replacement else v),
      (Core.List.map ~f:(fun x -> replace_loki_at_leaf x lokis_replacement) trees)
    )
  ;;
```

When it comes to general trees, the way we handle trees should be different as a list is used instead of a tuple.

```ocaml
let has_path t word = 
  let rec rec_search acc = function 
  | Leaf x -> (acc ^ x) = word
  | Tree (v, trees) ->
    let concat_ = acc ^ v in 
    (concat_ = word) || (Core.List.fold trees ~f:(fun acc x -> (acc || (rec_search concat_ x))) ~init:false)
  in rec_search "" t 
```

This one is the hardest one in the questions set, require to use fold over a recursive function, and we want to use tail-recursion here as well as `||`to make sure we could exit the program earlier when condition satisfied.

## Harder Trees
The previous examples are overall easy if you are familiar with recursion, I try a harder one from [cs61a 21summer midterm](https://cs61a.org/exam/su21/midterm/61a-su21-midterm.pdf#page=10), call **Maximum Exponen-tree-ation**:

![description](/personal_site/images/content/exp_tree.png)

I will start with calculate the max exponential value:
```ocaml
let largest_exp = function 
  | [] -> 1
  | hd :: tl -> 
    let rec largest_val acc = function 
    | hd :: tl ->  Int.max (largest_val (acc ** hd) tl) (acc ** (largest_val hd tl))
    | [] -> acc
    in
    largest_val hd tl
```
But if you want to constructure the tree, and compare the node of the tree, `List` is not an good option, as you want to break this down into smaller problems: 
- find **Base** and **Exponent** buttom up
- start by dividing array into subarrays, the first stands for base, the second stands for exponent.
- use `Array.map` to split list for value from 1 to `Array.length a - 1`.

The code is shown below:

```ocaml
let rec largest_exp_tree a = 
  if Array.length a = 1 then (Leaf (Array.get a 0))
  else 
    let tree_at_split i = 
      let base = largest_exp_tree (Array.sub a ~pos:0 ~len:i) in 
      let expon = largest_exp_tree (Array.sub a ~pos:i ~len:((Array.length a) - i)) in 
      Tree (((get_label base) ** (get_label expon)), base, expon)
    in 
  let subts = Array.map ~f:(tree_at_split) (Array.init ~f:(fun x -> x+1) (Array.length a - 1)) in
    (Option.value_exn (Array.max_elt subts ~compare:(fun a b -> (Int.compare (get_label a) (get_label b)))))
  ;;
```
## Summary

Ocaml really give coders and readers a good experience in terms of readibility and simplicity, The errors are also easy to identify, not so easy to debug for me tho🙃. Some coding style I may consider use `$` and `@@` to avoid more parenthesis.

**Updated...**

The use of `List` or self-defined ADT are bug-free inclined, and error message is easy to identify, but when you use `Array` and slice is involved, the error message is just messy, hard to debug.

