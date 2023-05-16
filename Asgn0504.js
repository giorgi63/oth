// 1. create some person obj with firstname, lastname and printDetails function
//          Remember to use 'this' in your function

var person1 = {
    firstName: 'Giorgi',
    lastName: 'Gulisashvili',
   
  };

  var printDetails = function(age, occupation) {
    console.log("Name:", this.firstName, this.lastName, "Age:", age, "Occupation:", occupation);
  }

  printDetails.call(person1, 21, 'Programmer');
  
  // 2. Create another person obj, and try to borrow the function from person1
  var person2 = {
    firstName: 'Mariam',
    lastName: 'Ostatishvili'
  };
  
  printDetails.call(person2, 35, 'Programmer');
  printDetails.apply(person2, [35, 'Programmer']); 
  
  // 4. Introduce at least 2 arguments to your printDetails function.
  // 5. Pass these arguments through call, apply methods
  printDetails.call(person2, 28, 'Lawyer');
  printDetails.apply(person2, [28, 'Lawyer']);
  
  // 6. Now use bind to create copies of function (with some context)
  var person3 = {
    firstName: 'Mayur',
    lastName: 'Sonar'
  };
  
  var printPerson3Details = printDetails.bind(person3, " Unknown :)", "programmer" );
  printPerson3Details('Singer'); 





  ///////////////
  var grocery = {
    item1: 'Bread',
    item2: 'Secon brand bread ', 
    barcode: {
      item1: 978865040067,
    }
  };
  
  
  
  var a = function(item1Quantity, item2Quantity) {
  
    if (item1Quantity <= 0) {
      console.log("This item is not in stock, but you can buy the alternative one: | ", this.item2, "| SKU", grocery.barcode.item1 );
    } else if (item1Quantity >= 0){
      console.log("Thank you for choosing our grocery, requested item is avialable:");
      console.log(this.item1, "| SKU", grocery.barcode.item1, " | ",  item1Quantity, " Pieces left in stock");
    }
  
  }
  
  a.call(grocery, 0, 1)
  
  var GroceryBranch2 = {
    item1: 'Bread second',
    item2: 'orange juice', 
    barcode: {
      item1: 0000000000000,
    }
  
  }
  var bindFunction = a.bind(GroceryBranch2, 54, 0)
  bindFunction.call(); 

