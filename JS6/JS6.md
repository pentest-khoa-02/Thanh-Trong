# ES6 Features Every Javascript Developer Should Know.

ES6 is a new standardized version of javascript that was released in 2015. It is also known as ECMAScript 2015. ES6 has many new features that can help a developer understand and write code more efficiently. With a lot of forward-thinking features (ES6) attached to it, [JavaScript](https://www.divami.com/blog/presentation-javascript-html-developers) is an exciting language to program.

ES6 is the basis for modern programming languages like Angular and ReactJs. With Object-Oriented Classes, Arrow Functions, String Literals and much more, ES6 is a feature-rich advancement to ES5, the previous version of JavaScript, and is 100% backwards compatible. One can write code in ES5 and gradually switch to ES6 features with ease.

  -  Default parameters
  -  Template literals (Template strings)
  -  Tagged Templates
  -  Destructuring assignment
  -  Arrow function expressions
  -  let and const
  -  Spread and Rest Syntaxes (…)
  -  Object.assign() and Object.is()
  -  Classes
  -  Modules
  -  Promise
  -  Map and Set

### Default parameters

In JavaScript, the default value for function parameters is undefined. It may be handy to set a different value instead. This can be achieved with the help of default function parameters.

Before ES6,

```javascript
function add(num1, num2) {
 return num1+num2;
}
add (5,2); //returns 7
add(3); //returns NaN as num2 is undefined
```

With ES6,

```javascript
function add(num1, num2=10) {
 return num1+num2;
}
add (5,2) //returns 7
add(3) //returns 13 as num2 has default value = 10
```

With ES6, earlier function parameters are available for the later default parameters as well

```javascript
function getFullName(firstName, lastName, fullName=lastName+' '+lastName){
 return fullName;
}
getFullName('Le','Trong'); // returns Le Trong
getFullname('Le', 'Trong', 'Le Trong'); // returns Le Trong
```

If default parameters are defined, the scope of the default parameters is the parent to the scope created for the function body. This means that the default parameters can not provide a reference to the functions and variables declared inside the function body, and the variables inside the function body declared using var will mask default parameters with the same name.

### Template literals (Template strings)

Known as Template strings in the previous editions of ES2015, Template literals allow embedded expressions, multi-line strings and string interpolation.

``
`My name is Le`
``

Template literals are the string literals enclosed by the backtick and can contain placeholders indicated by dollar sign curly braces.

```javascript
let myName = 'Le';
let myRole = 'Software Developer';
console.log(`My name is ${myName} and I am a ${myRole}.`); // My name is Le and I am a Software Developer
```

With template literals, embedding expressions becomes more readable, thus eases writing complicated code with numerous substitutions (placeholders).

Without template literals, the above console string would look like below, console.log(‘My name is ‘ + myName + ‘ and I am a ‘ + myRole);

Considering multi-line strings, Without template literals the code would be as follow,

```javascript
let myName = 'Le';
let myRole = 'Software Developer';
console.log("Welcome! \n My Name is "+myName+"\n I am a "+myRole);
```

With template literals, multi-line strings can be written as follows,

```javascript
console.log(`Welcome!
My Name is ${myName}
I am a ${myRole}`); //newline character unnecessary
```

### Tagged Templates

Tagged Templates are the more advanced form of template literals.

With tagged templates, we can parse template literals with a function.

```javascript
let myName = 'Le';
let myRole = 'Software Developer';
function myTag(array, name, role){
 let str0 = array[0]; // My name is
 let str1 = array[1]; // and I am
 
 // we can further manipulate str0, str1, name and role here
 return `${str0}${name}${str1}${role}`;
}
console.log(myTag`My name is ${myName} and I am ${myRole}`); // My name is Le and I am Software Developer
```

The first argument to a tag function can only be an array of string values.

A special raw property exists on this first argument passed to the tag function which can be used to access the raw strings as they were entered without processing the escape sequences (‘\n’).

### Destructuring assignment

The destructuring assignment allows reading values from an array or properties from an object, into distinct variables.

Destructuring an array, 

```javascript
let myName, myRole;
let array = ['Le', 'Software Developer'];
[myName, myRole] = array; //positional assignment occurs here
console.log(myName, my Role); //Le Software Developer
```

Destructuring an object, 

```javascript
let myName, myRole;
let object = {myName:'Le', myRole:'Software Developer'};
({myName, myRole}=object);//properties (keys) are matched with 
the local variable names
console.log(myName, myRole); //Le Software Developer
```

A variable can also be assigned a default value, in case the value unpacked from an array is undefined

```javascript
let myName, myRole;
let array = ['Toad'];
[myName='Le', myRole='Software Developer'] = array;
console.log(myName, myRole); //Toad Software Developer
```

We can also ignore some values from the array,

```javascript
let myName, myRole;
let array = ['Le', 'Toad', 'Software Developer'];
[myName, , myRole] = array;
console.log(myName, myRole); //Le Software Developer
```

### Arrow function expressions

Arrow function expressions is a new syntax to writing ordinary function expressions

Ordinary function,

```javascript
function getName(firstName,lastName){
 return `${firstName} ${lastName}`;
}
console.log(getName('Le','Trong');
Arrow function,
let getName = ((firstName,lastName)=> `${firstName} ${lastName}`);
console.log(getName('Le','Trong');
```

Both functions return the name “Le Trong”.

With arrow function expressions we can ignore function and return with one-liner code.

An arrow function can also contain a block of statements rather than just an expression.

```javascript
let getName = ((firstName, lastName) => {
 let myRole = 'Software Developer';
 return `My name is ${firstName} ${lastName}
 I am a ${myRole}.`;
});
```

Unlike ordinary functions, arrow functions do not have their own this.

The value of this inside an arrow function is always bound to the value of this in the closest non-arrow function.

We cannot use new keywords with arrow functions as these are not constructible.

### Let and const

The let statement declares a block-scoped local variable

Unlike var statement which is scoped to its function, let statement is scoped to its nearest enclosing block.

Using let statement, block scoped statement

```javascript
let x = 10;
if(x==10){
 let x = 20;
console.log(x); //prints 20
}
console.log(x); //prints 10;
```

Using var statement, function scoped statement

```javascript
var x = 10;
if(x==10){
 var x = 20;
console.log(x); //prints 20
}
console.log(x); //prints 20;
```

A const statement declares a block-scoped local variable similar to let

A const statement Trongs not allow reassignment or redeclaration of the variable. A read-only reference to a value is created and the value is mutable but the variable identifier cannot be reassigned. In case of an object, the object’s contents can be altered.

```javascript
const myName; //throws error as const needs to be initialized
const myName='Le';
const myName='Trong'; //throws  error as const variable can not be reassigned
var myName='Trong'; //throws error as myName is reserved for constant above, 
same goes for let
```

const works on objects and arrays as well,

We can manipulate values of keys but cannot overwrite the object value

```javascript
const obj = {'firstName':'Le'};
const obj = {'name':'Toad'}; // throws error, can reassign an const variable
const obj.firstName = 'Toad'; //acceptable, as the key is not protected
```

Similarly, we can push new elements to a const array but can not reassign the new [array](https://www.divami.com/blog/weird-behaviour-new-array-javascript) to the const identifier.

### Spread and Rest syntaxes (…)

Rest and spread syntax use … (three dots) notation.

Spread syntax expands an array into separate elements, while a rest syntax condenses array elements into a single element.

Syntax

```javascript
let addNumbers = (x, y, z) => x+y+z; //returns sum of x, y and z
const numbers = [1,2,3];
console.log(addNumbers(...numbers));//prints 6
```

Here, the numbers array is expanded to elements x, y and z 

Rest Syntax

```javascript
let addNumbers = (...numbers) => {
let result =0;
 numbers.forEach(num=> result +=num);
return result
}
console.log(addNumbers(1,2,3));//prints 6
```

Here, the array elements are condensed to single element numbers in addNumbers’ parameters

Spread and Rest are basically opposites to each other.

### Object.assign() and Object.is()

Object.assign() method can be used to clone an object.

```javascript
let person = { height: '176' };
let clonePerson = Object.assign({}, person);
console.log(clonePerson); // {height:'176'}
```

Object.assign() can also be used to merge objects.

```javascript
let person = {height:'176'};
let employee = {id:'#1237', name:'Le'};
let myEmp = Object.assign({}, person, employee);
console.log(myEmp); //{height:'176',id:'#1237', name:'Le'}
```

The merged objects have properties contained in the source objects.

If source objects have the same properties, the properties of the later object overwrite the properties of the earlier one in the merged object.

Object.is() determines if the two values are the same.

```javascript
let a=10, b=10;
Object.is(a,b); //true
let c=20;
Object.is(a,c);//false
let obj1={a:1};
let obj2={a:1};
Object.is(obj1, obj2);//false, as both objects don't have same reference
Object.is(obj1, obj1);//true, both objects have the same reference
```

In the case of objects, both objects must have the same values and same reference to be true.

### Classes

Classes are a template for creating objects. They like functions can be defined as class declarations and class expressions and can be declared using the keyword class followed by the name of the class (say, Person).

```javascript
Class Person{
 constructor(name, age){
 this.name = name;
 this.age = age;
     }
}
```

You can create an instance of a class using a new keyword

``let p = new Person('Le',28);``

The parameters passed to a class are used to initialize the properties of the class at the time of its creation (in constructor, the first method called during class creation).

A class consists of its own properties and methods that can be referenced using the this keyword inside the class

```javascript
Class Person {
 Name='Le';
 getName(){
 return this.name;//returns Le
     }
}
let p = new Person();
console.log(p.getName()); //prints Le
```

ES6 also introduces new methods for existing Array Object and String Prototypes. The new methods significantly improve the way we manipulate these entities.

### Modules

Modules allow you to organize your code into smaller, reusable pieces. This makes it easier to manage complex projects and reduces the risk of naming collisions.

```javascript
// greeting.js
export const greet = (name) => {
  console.log(`Hello, ${name}!`);
};

// main.js
import { greet } from "./greeting.js";
greet("Trong");
```

### Promise

Promises are a way to handle asynchronous operations in JavaScript. They provide a way to handle errors, and can be combined to create complex asynchronous flows.

```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 1000);
  });
};

fetchData().then((data) => {
  console.log(data);
});
```

### Map and Set

The Map and Set data structures provide an efficient way to store unique values in JavaScript. They also provide a variety of useful methods for searching and manipulating the data.

```javascript
// Creating a Map
const map = new Map();
map.set("name", "Trong");
map.set("age", 19);

// Accessing values in a Map
console.log(map.get("name")); // Output: Trong
console.log(map.get("age")); // Output: 19

// Iterating over a Map
for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}

// Output:
// name: Trong
// age: 19

// Creating a Set
const set = new Set();
set.add("Trong");
set.add("A");
set.add("B");

// Iterating over a Set
for (const name of set) {
  console.log(name);
}

// Output:
// Trong
// A
// B

// Checking if a value exists in a Set
console.log(set.has("Trong")); // Output: true
```

