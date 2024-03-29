// USER INPUT & CONDITIONAL STATEMENT

// Q.NO1: Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”


// ANSWER OF QUESTION NO 1
// let cityName = prompt("Enter your city Name");
// if (cityName === "karachi") {
//    document.write("Welcome to city of lights");
// } else {
//     (cityName !== "karachi")
//     document.write("welcome to the pakistan");
// }


//..................................................................................


// Q.NO2: Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.




// ANSWER OF QUESTION NO 2
// let gender = prompt("enter your gender");
// if ( gender === 'male') {
//     document.write("Good Morning Sir");
// } else {
//     (gender === 'female')
//     document.write("Good Morning Ma’am");
// }


//..................................................................................



// Q.NO3: Write a program to take input color of road traffic signal
// from the user & show the message according to this table:




// ANSWER OF QUESTION NO 3
// let trafficSignal = prompt("ENTER THE TRAFFIC SIGNAL LIGHT COLOR").toLowerCase();

// let red = ("red");
// let yellow = ("yellow");
// let green = ("green");

// let stopNow = ("Must Stop");
// let readyToGo = ("Ready To Move");
// let go = ("Move Now");

// if (trafficSignal === red) {
//     document.write("<p>" + stopNow + "</p>");

// } else if (trafficSignal === yellow) {
//     document.write("<p>" + readyToGo + "</p>");
   
// } else  {
//     (trafficSignal === green)
//     document.write("<p>" + go + "</p>");
// } 


// document.write("<table>");
// document.write("<tr><th>Signal Color</th><th>Message</th></tr>");
// document.write("<tr><td>" + red + "</td><td>" + stopNow + "</td></tr>");
// document.write("<tr><td>" + yellow + "</td><td>" + readyToGo + "</td></tr>");
// document.write("<tr><td>" + green + "</td><td>" + go + "</td></tr>");
// document.write("</table>");



//..................................................................................



// Q.NO:4 Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”




// ANSWER OF QUESTION NO 4
// let remainingFuel = parseInt(prompt("Enter the remaining fuel in your car (in litres):"));

// if (remainingFuel < 0.25) {

//     alert("Please refill the fuel in your car");

// } else if (remainingFuel <= 1) {

//     alert('your fuel is ' + remainingFuel + " liter");

// } else  {

//     (remainingFuel > 1);
//     alert('your fuel is ' + remainingFuel + " liters");
// }



//..................................................................................



// Q.NO5: Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// f. if("car" < "cat"){
//     alert("car is smaller than cat");
//     }
    



// ANSWER OF QUESTION NO 5
//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
//  if("car" < "cat"){
//     alert("car is smaller than cat");
//     }



//..................................................................................




// Q.NO6: Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
// Show the total marks, marks obtained, percentage, grade &
// remarks like:




// ANSWER OF QUESTION NO 6
// let marksheet = ("<h1>Marksheet</h1>");
// document.write(marksheet + "<br>");
// let totalMarks = parseInt(prompt("Enter your Total Marks",300));
// document.write("Total Marks: " + totalMarks + "<br>");
// let userMarks = parseInt(prompt("Enter your obtained marks"));
// document.write("Marks Obtained: " + userMarks  + "<br>");
// let percentage = (userMarks * 100 / totalMarks);
// document.write("Percentage: " + percentage  + "<br>");
// if (percentage >= 80) {
//     document.write("your grade is A-one: " + "<br>" + "<h4>Remarks</h4> Congratulations");
// } else if (percentage >= 70){
//     document.write("your grade is A: " + "<br>" + "<h4>Remarks</h4> Good");
// }  else if (percentage >= 60){
//     document.write("your grade is B: " + "<br>" + "<h4>Remarks</h4> Good but keep it up");
// } else {
//     (percentage <= 60);
//     document.write("you are fail: " + "<br>" + "<h4>Remarks</h4> sorry need improvement");
// }




//..................................................................................



// Q.NO:7 Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.





// ANSWER OF QUESTION NO 7
// let secretNumber = 8;
// let userGuessNum = parseInt(prompt("Enter any number ranging from 1 to 10"));

// if (userGuessNum === secretNumber) {
//     document.write("Bingo! Correct answer");
// } else if (userGuessNum + 1 === secretNumber) {
//     document.write("Close enough to the correct answer");
// } else {
//     document.write("Incorrect guess");
// }




//..................................................................................




// Q.NO:8 Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.




// ANSWER OF QUESTION NO 8
// let number = parseInt(prompt("Enter a Number"));
// if (number % 3 === 0) {
//     document.write(number + " is divisible by 3");
// } else {
//     document.write(number + " is not divisible by 3");
// }



//..................................................................................



// Q.NO:9 Write a program that checks whether the given input is an
// even number or an odd number.





// ANSWER OF QUESTION NO 9
// let num = parseInt(prompt("Enter any number to check whether it's odd or even"));

// if (num % 2 === 0) {
//     document.write("Number is even");
// } else {
//     document.write("Number is odd");
// }


//..................................................................................



// Q.NO:10 Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”




// ANSWER OF QUESTION NO 10
// let userTemp = parseInt(prompt("Enter temperature"));

// if (userTemp > 40) {
//     document.write("It is too hot outside. " + userTemp + "<sup>°</sup>");
// } else if (userTemp > 30) {
//     document.write("The Weather today is Normal. " + userTemp + "<sup>°</sup>");
// } else if (userTemp > 20) {
//     document.write("Today’s Weather is cool. " + userTemp + "<sup>°</sup>");
// } else {
//     document.write("OMG! Today’s weather is so Cool. " + userTemp + "<sup>°</sup>");
// }



//..................................................................................



// Q.NO:11 Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

let firstNum = parseInt(prompt("Enter the First Number"));
let secondNum = parseInt(prompt("Enter the Second Number"));
let operator = prompt("Enter the operator (+, -, *, /, %):");

if (operator === '+') {
    document.write(firstNum , ' + ' , secondNum , ' = ', firstNum + secondNum);
}else if (operator === '-') {
    document.write(firstNum , ' - ' , secondNum , ' = ', firstNum - secondNum);
}else if (operator === '*') {
    document.write(firstNum , ' X ' , secondNum , ' = ', firstNum * secondNum);
}else if (operator === '/') {
    document.write(firstNum , ' ÷ ' , secondNum , ' = ', firstNum / secondNum);
}else if (operator === '%') {
    document.write(firstNum , ' |X| ' , secondNum , ' = ', firstNum % secondNum);
}else {
    document.write("Invalid Operation");
}



