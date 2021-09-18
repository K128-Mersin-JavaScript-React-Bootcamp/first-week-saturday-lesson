var a = { 
    name : "Zafer", 
    sayHello: function (){ 
        return `Hello ${this.name}`;
    }
};

var b = ["a", "b", "c"];


function c() {
    this.name = "Zafer";
}

var cobj = new c();
// console.log(cobj.name);

class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }

var myRect = new Rectangle(100, 200);

// console.log(myRect.width);

function Person(age) {
    this.age = age;
    this.nextAge = function () {
        return this.age + 1;
    }
}

function Teacher(age, subject) {
    Person.call(this, age);
    this.subject = subject;
}

// Teacher.prototype = Object.create(Person.prototype);

const zafer = new Teacher(30, "JS");
const hasan = new Person(22);

// console.log(zafer.nextAge());

class Shape {
    constructor(height, width, age) {
      this.height = height;
      this.width = width;
      this.age = 123;
    }

    calculateArea() {
        return this.width * this.height;
    }

    static getName () {
        return this.length;
    }
    
}

class Square extends Shape {
    constructor(width) {
        super(width, width);
    }
}

const mySquare = new Square(100);

console.log(Shape.getName());