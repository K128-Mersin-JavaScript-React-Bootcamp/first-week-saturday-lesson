Kodluyoruz 1. hafta 
1. JavaScript nedir?
2. NodeJS kurulumu
    * Current LTE versiyon farkları
3. Github repo oluşturma
    * LICENSE, gitignore farkları
4. Repoyu clone'lama
    * .gitignore dizini
5. VsCode kullanımı
    * Quokka eklentisi kurulumu
    * GitLens
6. node hello.js
    * console, string, number, boolean, object tanımlama
7. Array tanımlama
    * [1,2,3], new Array();
    * Spread Operator
        * ["Zafer", ...names]
        * function sum(x, y, z) { }, 
            * sum(...numbers)
            * sum.apply(null, numbers)
        * let objClone = { ...obj };
8. Comment lines
    * //, /*
    * CMD K + C, CMD Shift 7
9. var-let-const farkları
10. npm yarn tanıtımı
11. eslint tanıtımı
    *  rules: { "no-var": "off" },
12. git status add push
13. String, template literals(``)
14. Fonksiyon oluşturma
    * function sayHello() {} // hoisted
    * const sayHello = function(text) {} // not hoisted (anonymous)
    * const sayHello = () => {} // lambda
    * IIFE 
        (() => {
            console.log("hello")
            return 2;
        })();
15. Destructuring
    * let a, b, rest; 
        [a, b] = [10, 20];
    * [a, b, ...rest] = [10, 20, 30, 40, 50];
    * ({ a, b } = { a: 10, b: 20 });
    * ({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
        console.log(a); // 10
        console.log(b); // 20
        console.log(rest); // {c: 30, d: 40}
16. Object creation with syntax constructs
```js
// Inherits from Object.prototype
var o = {a: 1};

// Inherits from Array.prototype
var b = ['yo', 'whadup', '?'];

// Inherits from Function.prototype
function c() {
  return 2;
}
```
17. Object creation with constructs
```js
function Graph() {
  this.vertices = [];
  this.edges = [];
}

Graph.prototype.addVertex = function(v) {
  this.vertices.push(v);
}

var g = new Graph();
```


17. Object creation with Object.create
```js
var a = {a: 1};
// a ---> Object.prototype ---> null

var b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 (inherited)

var c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

var d = Object.create(null);
// d ---> null
console.log(d.hasOwnProperty);
// undefined, because d doesn't inherit from Object.prototype
```


```js
const person = {
    name: ['Bob', 'Smith'],
    age: 32,
    gender: 'male',
    sayHello: function(){
        console.log("Hi " + this.name[0]);
    }
};
```

```js
person.name // dot notation
person["name"]["last"] // bracket notation
```

```js
function Person(name) {
  this.name = name;
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };
}
```
17. Inheritance
```js
function Person(age) {
  this.age = age;
  this. nextAge = function() {
    return this.age + 1;
  }
};
```

```js
function Teacher(age, subject) {
  Person.call(this, age);

  this.subject = subject;
}
```

