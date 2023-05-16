function a(callback) {
    setTimeout(function() {
      callback('Done!');
    }, 3000);
  }


  ////
  function A(cb) {
    const name = "Gio";
    console.log("Hello " + name);
    cb();
  }
  
  function call1() {
    console.log("Callback function");
  }
  
  A(call1);
  
  ///
  
  a(function(result) {
    console.log(result);
  });

  //

  function greet(name) {
    var count = 10;

    return (function() {
        console.log(name);
        console.log(count);
    });
}

var e1 = greet("Giorgi");
e1(); 

var e2 = greet("Mariami");
e2(); 
  
// 

function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.greet = function() {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
  };
  
  var person1 = new Person("Giorgi", 21);
  
  person1.greet();



  // 


const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person3 = {
  firstName: "Gio",
  lastName: "G"
}
const person4 = {
  firstName: "Mariam",
  lastName: "M"
}
console.log(person.fullName.call(person3));
console.log(person.fullName.call(person4)); 
const numbers = [5, 6, 2, 3, 7];
const max = Math.max.apply(null, numbers);
console.log(max); 

const module = {
  x: 42,
  getX: function() {
    return this.x;
  }
}
const unboundGetX = module.getX;
console.log(unboundGetX()); 

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());