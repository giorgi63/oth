var grocery = {
  item1: 'Bread',
  item2: 'Secon brand bread ', 
  barcode: {
    item1: 978865040067,
    item2: 345678987654
  }
};

var a = function(item1Quantity, item2Quantity, barcode) {

  if (item1Quantity <= 0) {
    console.log("This item is not in stock, but you can buy the alternative one: | ", this.item2, "| SKU", this.barcode.item2 );
  } else if (item1Quantity >= 0){
    console.log("Thank you for choosing our grocery, requested item is avialable:");
    console.log(this.item1, "| SKU", this.barcode.item1, " | ",  item1Quantity, " Pieces left in stock");
  }

}

a.call(grocery, 1, 1,)

var GroceryBranch2 = {
  item1: 'Bread second',
  item2: 'orange juice', 
  barcode: {
    item1: 9877774323456,
    item2: 9777777770000,
  }

}
var bindFunction = a.bind(GroceryBranch2, 54, 0)
bindFunction.call(); 




///////////////////////////////////
// 1. Check the prototype chain of each Array, function and object types

console.log(Array.prototype);
console.log(Function.prototype);
console.log(Object.prototype);

// 2. Create an object and try to point its prototype to a different obj

const obj1 = {};
const obj2 = { prop: "value" };
Object.setPrototypeOf(obj1, obj2);
console.log(obj1.prop); 

// 3. Check how the property is picked up from prototype chain (you should have a missing prop in orig object,
// but it should be present in your prototype chain)

const obj3 = {};
const obj4 = { prop: "value" };
Object.setPrototypeOf(obj3, obj4);
console.log(obj3.prop);

// 4. Use prototype effeciently. example of multiple objects with same function.

function myFunc() {
  console.log("Hello World!");
}

const obj5 = {};
const obj6 = {};
Object.setPrototypeOf(obj5, { myFunc });
Object.setPrototypeOf(obj6, { myFunc });

obj5.myFunc(); 
obj6.myFunc(); 

// 5. Declare the function on prototype, and remove it from individual objects. And then call the function

function myFunc2() {
  console.log("Hello World!");
}

const obj7 = {};
const obj8 = {};

//Object.setPrototypeOf(obj7, { myFunc2 }); 
//Object.setPrototypeOf(obj8, { myFunc2 });


obj7.myFunc2(); 
obj8.myFunc2(); 



