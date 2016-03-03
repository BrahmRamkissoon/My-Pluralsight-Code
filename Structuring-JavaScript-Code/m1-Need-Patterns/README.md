# Pluralsight: Structuring JavaScript Code
[Course Info](https://www.pluralsight.com/courses/structuring-javascript) | Author: [Dan Wahlin](https://www.pluralsight.com/authors/dan-wahlin)

## Course Description
With the rise of HTML5 more and more JavaScript code is being included in applications to leverage canvas, geolocation, local storage, and other key APIs. This course walks through several patterns that can be used to structure code in a way that’s more re-useable, more maintainable, and less susceptible to naming collisions. Learn about patterns such as the Revealing Module and Revealing Prototype patterns and see how they can be used to convert function spaghetti code into structured code that encapsulates variables and functions.

### Module 1 - Why do we need JavaScript Patterns?
Now in this first module, we're going to talk about why do we need JavaScript patterns in the first place? After all, if you've been writing JavaScript code already and not using any patterns, you probably rolled out successful apps, and they worked just fine. Well, it really boils down to three key areas. 

* We want to write code in a way that leverages as much reuse as possible.  
* We want to promote maintenance of our code.
* Leverage encapsulation and modularization to avoid naming conflicts. 

So, in this first module, we're going to start off by talking about what I call function spaghetti code. This is traditionally how most people get started with JavaScript. They just create function after function, have some variables. But there is a better way to do it. From there, we're going to talk about how can we encapsulate variables and functions in our JavaScript code using something called closures? Closures provide encapsulation much in the same way that classes provide encapsulation in the object-oriented world. So, I'll explain what a closure is and how you can write closures in your JavaScript code. And then, finally, I'm going to address two different ways you can define variables. There's really not a better way to do it per se, but I like to use one particular technique in my code. And I'll show you that, and we'll be using that technique throughout all the different modules coming up in this course. So to get started, let's jump into our first section here on function spaghetti code and look at the traditional way most people get started writing their JavaScript code in applications.