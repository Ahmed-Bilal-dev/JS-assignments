// chapter  12 & 13  assignment

// Q.NO1: Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).



// ANSWER OF QUESTION NO 1
// let inputchar = prompt("enter a character");
// if (!isNaN(inputchar)) {
//     document.write("The input is a number.");
// } else if (inputchar === inputchar.toLowerCase()) {
//     document.write("The input is a lowercase letter.");
// } else if (inputchar === inputchar.toUpperCase()) {
//     document.write("The input is a uppercase letter.");
// }  else {
//     document.write("The input is neither a number nor a letter.");
// }




// .............................................................................................




// Q.NO2: Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.




// ANSWER OF QUESTION NO 2
// let firstInteger = parseInt(prompt("Enter the first number:"));
// let secondInteger = parseInt(prompt("Enter the second number:"));

// if (firstInteger > secondInteger) {
//     document.write("The first number is larger.");
// } else if (firstInteger < secondInteger) {
//     document.write("The second number is larger.");
// } else {
//     document.write("Both numbers are equal.");
// }

    



// .............................................................................................




// Q.NO3: Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.




// ANSWER OF QUESTION NO 3
// let number = parseInt(prompt("Enter any number:"));

// if (number > 0) {
//     document.write("Number is positive.");
// } else if (number < 0) {
//     document.write("Number is negative.");
// } else {
//     document.write("Number is zero.");
// }




// .............................................................................................




// Q.NO4: Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise




// ANSWER OF QUESTION NO 4 
// let userCharacter = prompt("Enter any character:").toLowerCase();

// if (userCharacter === "a" || userCharacter === "e" || userCharacter === "i" || userCharacter === "o" || userCharacter === "u") {
//     document.write("True, it is a vowel.");
// } else {
//     document.write("False, it is not a vowel.");
// }





// .............................................................................................





// Q.NO5: . Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:

// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise




// ANSWER OF QUESTION NO 5
// let myPassword = "12345"; 
// let userPassword = prompt("Enter Your Password");

// if (userPassword === '') { 
//     document.write("Please Enter Your Password");
// } else if (userPassword === myPassword) { 
//     document.write("Correct! The password you entered matches the original password.");
// } else {
//     document.write("Incorrect password.");
// }



// .............................................................................................



// Q.NO6: This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }



// ANSWER OF QUESTION NO 6
// My Answer
// var greeting;
// var hour = parseInt(prompt("Enter your age"));
// if (hour < 18) {
// document.write(greeting = "Good day");
// }else {
//     document.write(greeting = "Good evening");
// }


// Chat gpt Answer
// var greeting;
// var hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

// document.write(greeting);




// .............................................................................................



// Q.NO7: Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements




// ANSWER OF QUESTION NO 7 
let time = parseInt(prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7pm):"));
if (time >= 0 && time <= 1200) {
    document.write("Good Morning!");
}else if (time >= 1200 && time <= 1700) {
    document.write("Good Afternoon!");
}else if (time >= 1700 && time <= 2200) {
    document.write("Good Evening!");
}else  {
    document.write("Good Night!");
}