# Sprint Challenge: JavaScript Fundamentals

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a survey of problems. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied variables, functions, object literals, arrays, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in JavaScript fundamentals.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead.

## Description

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your team lead

1. Describe the biggest difference between `.forEach` & `.map`.

_David_: `.forEach` modifies/interacts/accesses the array in place and `map`, respecting the immutability feature of the functional programming paradigm, creates a copy of the array and modifies/interacts/accesses each array element of the copy.

2. What is the difference between a function and a method?

_David_: A function is the general term for a unit of code that the programmer writes to accomplish or do something, such as add two numbers. A method is a function defined within an object, usually a class object.

3. What is closure?

_David_: A closure is defined as a function (or object) and the environment (lexical scope) in which the function is defined. Closures are a feature of some programming languages, including Python and JavaScript. A closure is created when a function is created, and allows objects defined within the inner scope of that function to have access to, or know about, objects within the outer scope. The outer scope is not necessarily one single level of scope but could potentially represent many nested scopes. Only the most innermost scope would have access to everything from itself -----> the global scope. This relationship does NOT function in reverse, however. The outer scope cannot access, or have knowledge of, objects defined within any inner scope. 

4. Describe the four rules of the 'this' keyword.

_David_: The four rules of this are: 1)`Global binding`, 2)`Implicit binding`, 3)`New binding`, 4)`Explicit binding`. In brief, they function as follows:
          1)`Global binding`: Using the `this` keyword inside an object or variable without declaring a class or constructor to create context to define `this` would refer to the console or windows object.
          2)`Implicit binding`: Using the `this` keyword in an object literal would bind `this` to the object defined by that literal.
          3)`New binding`: Using the `this` keyword in a class or constructor function would bind `this` to the object defined by the class or constructor after an instance of the object is created using the `new` keyword.
          4)`Explicit binding`: Using the `this` keyword in object methods such as `.bind`, `.apply` or `.call` would create context within that function and `this` would refer to the object on which to apply/call/bind that method. It is used to bind one object or it's method(s) to another object.

5. Why do we need super() in an extended class?

_David_: The super() call under the hood completes the same purpose as calling `Parent.call(this, arguments)` in the constructor function pattern. It allows the child class to inherit the properties and methods of the parent class without having to use `Parent.call` to inherit the properties of the Parent class, and using `Child.prototype = Object.create(Parent.prototype)` to inherit the methods from the Parent class.

## Project Set up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add TL as collaborator on Github.
- [ ] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [ ] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [ ] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
- [ ] You are now ready to build this project with your preferred IDE
- [ ] Implement the project on your Branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your team lead as a Reviewer on the Pull-request
- [ ] TL then will count the HW as done by  merging the branch back into master.


## Minimum Viable Product

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

## Task 1: Objects and Arrays
Test your knowledge of objects and arrays. 
* [ ] Use the [objects-arrays.js](challenges/objects-arrays.js) link to get started.  Read the instructions carefully!

## Task 2: Functions
This challenge takes a look at callbacks and closures as well as scope. 
* [ ] Use the [functions.js](challenges/functions.js) link to get started. Read the instructions carefully!

## Task 3: Prototypes
Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [ ] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

## Task 4: Classes
Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Stretch Problems

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!
