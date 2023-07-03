---
title: "ReadList"
description: Up-to-date readlist
date: 10-05-2023
modified: 24-06-2023
isdraft: false
image: "header/readlist.png"
pined: true
tags: ['Programming', 'Ocaml', 'Pined']
---
(keep updated...)

## Updated 2023/6/24
Time really flys, another week of doing nothing. Try to write something several times, but end up fixing UI stuff. Are there better ways to write small things ? Or should I create a **pinned** threads for small thoughts. But I would update some interest articles here:
1. [1. Ocaml in Rust way, another blog from JaneStreet Compiler Team](https://blog.janestreet.com/oxidizing-ocaml-ownership/?s=35)
2. [2. Simple View Transition API on MPA](https://daverupert.com/2023/05/getting-started-view-transitions/)
3. [3. Ocaml: Polymorphism and its limitations](https://v2.ocaml.org/manual/polymorphism.html)
4. [4. Why doesn't TypeScript properly type Object.keys?](https://alexharri.com/blog/typescript-structural-typing)

Enjoy your weekend!

## Updated 2023/5/29
Spent several days on reading `Telegraml` source code(a lib that build telegram bot), frustrated by not understanding how api gets called...

Read an excellent blog from JaneStreet [Oxidizing Ocaml: Locality](https://blog.janestreet.com/oxidizing-ocaml-locality/) talking about their approach for better `GC`, and been back to `GADT` from 
*Real World Ocaml* (have a better grasp now as I am more comfortable with Ocaml Syntax).

Next article would be about either GADT or Backtracking(yeah I start learning algos again, see how far I could go this time)

## Updated 2023/5/17
I post some interesting tree structures today, check it out: [Trees In Ocaml](/personal_site/blogs/trees_in_ocaml)

## Updated 2023/5/10
I've been up to `Ocaml` or more generally Functional Programming for a while. Been captured by the simplicity of functional expression and beautiful pattern matching style. However, the lack of study materials in various forms as well as the notorious lack of documentations discourage me a lot, I want to share some materials I think is usful here to help me catch up with FP better(this table would be updated frequently): 


| clickable title | content | level | 
| --------------- | ------- | ----- |
| [Real World Ocaml](https://dev.realworldocaml.org/index.html) | Useful, Real-world example of Ocaml | ⭐⭐⭐ |
| [OCaml Programming: Correct + Efficient + Beautiful](https://cs3110.github.io/textbook/chapters/ds/memoization.html) | Intro Level FP course | ⭐ | 
| [CS3110: 15SP](https://www.cs.cornell.edu/courses/cs3110/2015sp/recitations/9/rec09.html) | Previous material of the second one, very useful | ⭐⭐ | 


I like *Real World Ocaml* very much and strongly recommend this one if you got interest in `Ocaml` and already have some programming experience, I've finish first 8 chapters and stucked at the 9th chapter. And overall, my feeling of the examples given in the book is that easy ones are easy and make natural sense to me but some examples like the ones given in [GADTs](https://dev.realworldocaml.org/gadts.html) are hard to follow as polymorphic type have not been discussed at this chapter. I would write an article on my learnings of `OCaml` and stop here to talk about other resources.


My first interest into `Ocaml` actually came from some random tweet sharing the *OCaml Programming: Correct + Efficient + Beautiful* course along with their textbook. But it is too intro at my first glance, many details are put into syntax, not language itself, which encourage me to start reading the official docs(as I did for the Julia lang, huge shoutout to julia docs, really good work). And you may know the result🫠. (The docs are so bad, not even have search function). Later, I stucked by *Real World Ocaml*, I went back to this book to find out that some important concept are discussed clearly.

