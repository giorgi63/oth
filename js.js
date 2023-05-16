
// Assgn 1


//I created it by connecting the capitalized words together 
//with the join method and then log it to the console with the console.log function.

function SentenceC(sentence) {
    var words = sentence.split(" ");
    var capital = words.map((word) => {
      var firstLetter = word.charAt(0).toUpperCase();
      var restOfWord = word.slice(1).toLowerCase();
      var Cword = firstLetter + restOfWord;
      return Cword;
    });
    var capitalizedSentence = capital.join(" ");
    console.log(capitalizedSentence);
  }
  
  SentenceC("my name is Giorgi"); 




 // Assgn 2

// To hold the distinct elements from the input array,
// I created an empty Arr and initialize it. Then, I looped through the elements in the input array to saw 
// if there are duplicates in the Arr.  I used the push technique to add it to the Arr.

function removeDuplicates(arr) {
  var uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  console.log(uniqueArr);
}
var arr = [2, 9, 5, 6, 2, 9, 4, 2, 7];
removeDuplicates(arr); 


function any() {
  function abc() {

  }
  return abc()
}



// 1
var person = {
  firstname: "Giorgi",
  lastname: "gulisashvili"
  }
  
  var printDetails = function() {
      console.log(this.person.firstname, this.person.lastname)
  }
  person.printDetails()
  
  
  // 2. Create another person obj, and try to borrow the function from person1
  
  
  var person3 = {
      firstname: 'mariam',
      lastname: 'ostatishvili',
      function() {
      console.log(this.person2.firstname, this.person2.lastname);
      }
  }
  
  printDetails()
  var grocery = {
    item1: 'bread',
    item2: 'orangeJuice'
    };
  
  var itemsStock = [
    'item1', 
    'item2'
  ];
  
  
  
  var a = function(item1Quantity, item2Quantity) {
  
    console.log(this.item1, this.item1Quantity, this.item2)
  }
  
  a.call(grocery, 5, 0,)
  