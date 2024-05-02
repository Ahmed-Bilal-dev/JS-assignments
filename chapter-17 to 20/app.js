// Q.NO:1 Declare and initialize an empty multidimensional array.
// (Array of arrays)

// ANSER OF Q:NO 1
// let multiArr = [[]];
// multiArr.push([]);

// .............................................................................................

// Q.NO:2 Declare and initialize a multidimensional array
// representing the following matrix:

// ANSER OF Q:NO 2
// let multiArr = [
//     [1, 2, 3 + "<br/>"],
//     [1, 0, 1, 2 + "<br/>"],
//     [2, 1, 0, 1 + "<br/>"],
// ]
// document.write(multiArr);

// .............................................................................................

// Q.NO:3 Write a program to print numeric counting from 1 to 10.

// ANSER OF Q:NO 3
// for (let i = 1; i<=10; i++) {
//     document.write(i + "<br/>");
// }


// .............................................................................................

// Q.NO:4 Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// ANSER OF Q:NO 4
// let userInputTable = parseInt(prompt("Enter any number you want to Multiply"));
// let userInputTableLength = parseInt(prompt("Enter the length of multiplication"));
// for (let i = 1; i<=userInputTableLength; i++) {
//         document.write(`${userInputTable} X ${i} =  ${userInputTable * i} <br/>`);
//     }

// .............................................................................................

// Q.NO:5 Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

// ANSwER OF Q:NO 5
// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// for (let j = 0; j < fruits.length; j++) {
//     console.log("Element at index " + j + " is "+ fruits[j]);
// }


// .............................................................................................


// Q.NO:6 Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// ANSwER OF Q:NO 6
// let counting = ("<h1>Counting<h1/>");
// document.write(counting);
// for (i=1; i <= 15; i++) {
//     document.write(i + " , ");
// }

// let reverseCounting = ("<h1>Reverse Counting<h1/>");
// document.write(reverseCounting);
// for (i=15; i >= 1; i--) {
//     document.write(i + " , ");
// }

// let evenNumbers = ("<h1>Even Numbers<h1/>");
// document.write(evenNumbers);
// for (i=1; i <= 10; i++) {
//     document.write(i*2 + " , ");
// }

// let oddNumbers = ("<h1>Odd Numbers<h1/>");
// document.write(oddNumbers);
// for (i=1; i <= 20; i++) {
//     if (i%2 !==0) {
//         document.write(i + " , ");
//     }
// }

// let series = ("<h1>Series<h1/>");
// document.write(series);
// for (i=1; i <= 10; i++) {
//     document.write(i*2 +"k" + " , ");
// }

//.............................................................................................

//Q.NO:7 You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// ANSwER OF Q:NO 7

// let userInput = prompt("Enter bakery item do you want to eat");
// let arr = ["cake, apple pie, cookie, chips, patties"];
// for (i = 0; i < arr.length; i++) {
//     if (userInput === arr[i]){
//     document.write(`yes ${userInput} is available at index of ${i}`);
//     break;
//     } else {
//         document.write(`sorry ${userInput} is not available`);
//     }
// }

//some changing code...........................

// let userInput = prompt("Enter bakery item do you want to eat");
// let arr = ["cake", "apple pie", "cookie", "chips", "patties"];

// for (let i = 0; i < arr.length; i++) {
//     if (userInput === arr[i]){
//         document.write(`Yes, ${userInput} is available at index ${i}.`);
//         break;
//     } else if (i === arr.length - 1) {
//         document.write(`Sorry, ${userInput} is not available.`);
//     }
// }


//.............................................................................................


// Q.NO:8 Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

// ANSWER OF Q:NO 8

// let A = [24, 53, 789, 91, 12, 120];
// document.write("Array items is " + A + "<br/>");
// let maxNumber = Math.max(...A);
// document.write(`The largest number in the array is: ${maxNumber}`);

//.............................................................................................


// Q.NO:9 Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

// ANSWER OF Q:NO 9
// let arr = [24, 53, 789, 91, 12, 120];
// document.write("Array items is " + arr + "<br/>");
// let maxNumber = Math.min(...arr);
// document.write(`The smallest number in the array is: ${maxNumber}`);

//.............................................................................................


// Q.NO:10 Write a program to print multiples of 5 ranging 1 to
// 100

// ANSWER OF Q:NO 10

for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) { 
        document.write(`${i}, `);
    }
}

