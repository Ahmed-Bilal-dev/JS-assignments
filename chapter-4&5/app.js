// Ahmed Bilal javascript assignment3 chapter 4 & 5
swal("Please enter your name to see the output:", {
  content: "input",
})
.then((value) => {
  swal(`Thank you 👍`);
});

// Chapter 4 (VARIABLE NAMES: LEGAL & ILLEGAL)
//Q1. Declare 3 variables in one statement.
// (ANSWER)...................
// var variable1, variable2, variable3;
// variable1 = ("my "), variable2 = ("name is "), variable3 = ("Ahmed Bilal");
// document.write (variable1, variable2, variable3);





// Q2. Declare 5 legal & 5 illegal variable names.
// (ANS) Legal variables........
// var myName, my_Name, MyName, $My_name, _Myname

// (ANS) illegal variables........
// var 23variable1, 2variable, my variable, my-variable, let, var;







// Q3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________
// (ANSWER)........................................
// var Display1 = ("<h1>Rules for naming JS variables</h1>");
// var Display2 = ("Variable names can only contain.numbers $ and _ for example:$my_1stVariable <br/>");
// var Display3 = ("Variables must begin with a letter $ or _ For example $name, _name or name <br/>");
// var Display4 = ("Variable names are case sensitive <br/>");
// var Display5 = ("Variable names should not be JS keyword <br/>");
// document.write (Display1, Display2, Display3, Display4, Display5);





// Chapter 5 (MATH EXPRESSIONS)
// Q1.Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.
// var FirstNumber;
// var SecondNumber;
// FirstNumber = +prompt("Enter the first number:");
// SecondNumber = +prompt("Enter the second number:");
// var sum = (FirstNumber + SecondNumber);
// document.write("sum of ", FirstNumber, " and ", SecondNumber, " is: " + sum, "<br/>");

// // for substraction
// var substraction = (FirstNumber - SecondNumber);
// document.write("substraction of ", FirstNumber, " and ", SecondNumber, " is: ", substraction, "<br/>");

// // for multiplication
// var multiplication = (FirstNumber * SecondNumber);
// document.write("multiplication of ", FirstNumber, " and ", SecondNumber, " is: ", multiplication, "<br/>");


// // for division
// var division = (FirstNumber / SecondNumber);
// document.write("division of ", FirstNumber, " and ", SecondNumber, " is: ", division, "<br/>");


// // for reminder
// var reminder = (FirstNumber % SecondNumber);
// document.write("reminder of ", FirstNumber, " and ", SecondNumber, " is: ", reminder, "<br/>");

// my practice...................................
// var num1;
// var num2;
// num1 = +prompt("enter your first number");
// num2 = +prompt("enter your second number");
// var sum = (num1 + num2);
// document.write ("sum of " +num1+ " and " +num2+ " is " +sum);





// Q3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”. 

// (ANSWER).............
// var num1;
// document.write("Value after variable declaration is :",num1 , "<br>");
// num1 = (3)
// document.write("Initial value :", num1, "<br>");
// num1 = ++num1;
// document.write("Value after increment is :",num1, "<br>");
// num1 = num1 + 9;
// document.write("Value after addition is :", num1, "<br>");
// num1 = --num1;
// document.write("Value after decrement is :", num1, "<br>");
// num1 = num1 / 3;
// document.write("The remainder is :", num1, "<br>");









// Q4.Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

// (ANSWER)..................................
// let ticketPrice = (600);
// ticketPrice = ticketPrice * 5;
// document.write("Total Cost To buy 5 to a movie is ",ticketPrice, "PKR");








// Q5.Write a script to display multiplication table of any
// number in your browser. E.g

// (ANSWER).............
// let  nameOfTable = ("<h1> TABLE OF 5 </h1>");
// document.write(nameOfTable);
// let tableOf4 = (5);
// document.write("5 X 1 = ", tableOf4 * 1, "<br>");
// document.write("5 X 2 = ", tableOf4 * 2, "<br>");
// document.write("5 X 3 = ", tableOf4 * 3, "<br>");
// document.write("5 X 4 = ", tableOf4 * 4, "<br>");
// document.write("5 X 5 = ", tableOf4 * 5, "<br>");
// document.write("5 X 6 = ", tableOf4 * 6, "<br>");
// document.write("5 X 7 = ", tableOf4 * 7, "<br>");
// document.write("5 X 8 = ", tableOf4 * 8, "<br>");
// document.write("5 X 9 = ", tableOf4 * 9, "<br>");
// document.write("5 X 10 = ", tableOf4 * 10, "<br>");






// Q6.The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// (ANSWER).............
// let myHeading = ("<h1> CELSIUS TO FAHRENHEIT </h1><br>");
// document.write(myHeading);
// let celsiusTemp = 28;
// let fahrenheitTemp = (celsiusTemp * 9/5) + 32;
// document.write(celsiusTemp + "°C is " + fahrenheitTemp + "°F","<br>","<br>");

// let myHeading2 = ("<h1> FAHRENHEIT CELSIUS TO </h1><br>");
// document.write(myHeading2);
// let fahrenheitTemp2 = 82;
// let celsiusTemp2 = (fahrenheitTemp2 - 32) * 5/9;
// document.write(fahrenheitTemp2 + "°F is " + celsiusTemp2 + "°C");











// Q7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

// Compute the total cost & show the receipt in your browser.

// (ANSWER).............
// let myHeading = ("<h1> SHOPPING CART </h1>");
// document.write(myHeading);

// let item1 = (300);
// document.write("Price of item 1 is ", item1, "<br>");
// let quantity1 = (4);
// document.write("quantity of item 1 is ", quantity1, "<br>");

// let item2 = (1200);
// document.write("Price of item 2 is ", item2, "<br>");
// let quantity2 = (7);
// document.write("quantity of item 2 is ", quantity2, "<br>");

// let shippingCharges = (100);
// document.write("Shipping charges is ", shippingCharges, "<br>");

// let totalCost = (item1 + quantity1 + item2 + quantity2 + shippingCharges);
// document.write("Total cost of your items are ", totalCost); 





// Q8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

// (ANSWER).............
// let myHeading = ("<h1> MARK SHEET </h1>");
// document.write(myHeading);

// let totalMarks = (1000);
// document.write("Total marks is ", totalMarks, "<br>");

// let obtainedMarks = (850);
// document.write("Obtained marks is ", obtainedMarks, "<br>");

// let percentage = (obtainedMarks * 100 / totalMarks);
// document.write("Percentage is ", percentage);





// Q9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

// (ANSWER).............
// let myHeading = ("<h1> CURRENCY IN PKR </h1>");
// document.write(myHeading);

// let $dollars = (10);
// let $1dollarIntoPkr = (200);
// let saudiRiyalIntoPkr = (60);
// let totalRiyal = (25);
// let pkr1 = ($dollars * $1dollarIntoPkr);
// let pkr2 = (saudiRiyalIntoPkr * totalRiyal);
// document.write("Total currency in Pkr ", pkr1 + pkr2);







// Q10. 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

// (ANSWER).............
// let myNum = (18);
// let result =(myNum + 5 * 10 / 2)
// document.write("Result is ", result);








// Q.11 The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

// Output them to the screen like so: “They are either NN or NN
// years old”.

// (ANSWER).............
// // let myHeading = ("<h1> THE AGE CALCULATOR </h1>");
// // document.write(myHeading);

let currentYear = (2024);
 let birthYear = +prompt("Please enter your birth year:");
 alert(birthYear)
 let age1 = (currentYear - birthYear);
 let age2 = (age1 - 1);
 document.write("They are either ", age1, " or ", age2, " years old");







