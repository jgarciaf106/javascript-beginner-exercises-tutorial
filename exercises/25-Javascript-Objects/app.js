var person = {
    name: "John",                //String
    lastname: "Doe",
    age: 35,                     //Number
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17], //Array
    significant_other: person2   //Object, yes the same variable/object defined after
};

var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};

var family = {
    lastname: "Doe",
    members: [person, person2]   //Array of objects, don't forget to add Jimmy
};


function addAllFamilyLuckyNumbers(anArray){
  var sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.

  //To-Do: loop and add; consider nested loops
  //Hint: use the anArray variable to get all of the lucky numbers
  
    for(const member in anArray){
    const allLuckyNumbers = arr => arr.reduce((a,b) => a + b, 0);
    sumOfAllLuckyNumbers = sumOfAllLuckyNumbers + allLuckyNumbers(anArray[member].lucky_numbers);    
}
  
  return sumOfAllLuckyNumbers;
}

//Enter all your code here:

// update John Doe Fourth Lucky number
person.lucky_numbers[3] = 33;

//create a new person
var person3 = {
    name: "Jimmy",
    lastname: "Doe",
    age: 13,
    gender: "male",
    lucky_numbers: [1,2,3,4],
    significant_other: null
}

//add the family memeber to the family object
family.members.push(person3);

//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members)); 