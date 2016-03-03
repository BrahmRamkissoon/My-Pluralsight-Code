# Pluralsight: JavaScript Design Patterns
[Course Info](https://www.pluralsight.com/courses/javascript-design-patterns) | Author: [Aaron Powell](https://www.pluralsight.com/authors/aaron-powell)

## Course Description
Throughout this course we'll look at a number of different design patterns which are useful when writing JavaScript centric applications. The course starts with several common patterns, including function argument patterns, chaining, and observable properties. We continue with a look at patterns using timers, including asynchronous execution and recursive setTimeout. Finally we review module patterns, pub-sub patterns, and the promise pattern. 

### Module 5 - Promises: 
In this module, we want to look at the Promise and Deferred pattern in JavaScript.
If everything is asynchronous how do we link operations?
Knowing when one ore more operations are complete

* Ajax
* Animations
* Etc 

Promise and Defer work primarily through a deferred object. A deferred object controls operations

* Progress reaised as deffered runs
* Done raised when deferred action completes successfuly
* Failure raised when deferred action is unsuccessful
* Future access to the deferred result should not change - AJAX

#### Note
I will be executing the .js files through node.js command prompt.

-Brahm
