// Question-1
var a=["hai","hello","how","are"]
a.push("you");
console.log(a);

// Question-2
var a=[1,2,3]
a.pop();
console.log(a);

// Question-3
var a=[1,2,3]
a.unshift("Prasanna");
console.log(a);

// Question-4
var a=[1,2,3]
a.shift();
console.log(a);

// Question-5
var a=[1,2,3]
a.reverse();
console.log(a);

// Question-6
var a=["Prasanna","Jyothi","Mohan","Dhana"]
var index=a.indexOf("Mohan");
console.log(index);

// Question-7
var a=["Prasanna","Jyothi","Mohan","Dhana"]
var exists=a.includes("Dhana");
console.log(exists);

// Question-8
var a = [400, 12, 325, 15];
a.sort();
console.log(a); 

// Question-9
var a=["meghana","chandana","vandana","aha"]
var b=a.join(",");
console.log(b);

// Multiple array methods
var a=["hai","hello","how","are"]
a.push("you");
a.shift();
console.log(a);

// 2.
var a=["hai","hello","how","are"]
a.reverse();
a.join(",");
console.log(a);

// 3.
var a=[1,2,3,4]
a.reverse();
var b=a.join(" , ");
console.log(b)

// 4.
let myArray = [3, 4, 5];
myArray.unshift(1, 2);
console.log(myArray); 
myArray.shift();
console.log(myArray);
let arrayLength = myArray.length;
console.log(arrayLength); 

// 5.
let array1 = [3, 1, 4];
let array2 = [6, 2, 5];
let combinedArray = array1.concat(array2);
console.log(combinedArray);
combinedArray.sort((a, b) => a - b);
console.log(combinedArray); 
combinedArray.pop();
console.log(combinedArray); 