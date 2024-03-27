// Javscript Assignment chapter 6 to 9

// Q.NO1: Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

// ANSWER OF QUESTION 1
// let a = 10;
// document.write("<h1> RESULT </h1> the value of a is" + ": " + a + "<br>................................... <br> <br>");
// document.write("the value of ++a is" + ": " + ++a + "<br>");
// document.write("Now the value of a is" + ": " + "11" + "<br><br>");
// document.write("the value of a++ is" + ": " + a++ + "<br>");
// document.write("Now the value of a is" + ": " + "12" + "<br><br>");
// document.write("the value of --a is" + ": " + --a + "<br>");
// document.write("Now the value of a is" + ": " + "11" + "<br><br>");
// document.write("the value of a-- is" + ": " + a-- + "<br>");
// document.write("Now the value of a is" + ": " + "10" + "<br><br>");







//Q.NO2: What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// ANSWER OF QUESTION 2
// let a = 2;
// let b = 1;
// document.write("--a: a is decremented to 1." + "<br>");
// document.write("--a - --b: a remains 1, b becomes 0." + "<br>");
// document.write("--a - --b + ++b: a remains 1, b becomes 1." + "<br>");
// document.write("--a - --b + ++b + b--: a remains 1, b becomes 0 after the operation." + "<br>");
//  document.write("a: 1" + "<br>" + "b: 0" + "<br>" + "result: 3");





//Q.NO3: Write a program that takes input a name from user & greet the user.

// ANSWER OF QUESTION 3
// let userNum = parseInt(prompt("Enter Any Number"));
// document.write("Thank you you entered " + userNum);







// Q.NO5: Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

// ANSWER OF QUESTION 5
// let table = parseInt(prompt("Enter Any Number" , 5));
// document.write(table + " X 1 " + "= "   + table*1  + "<br>");
// document.write(table + " X 2 " + "= "   + table*2  + "<br>");
// document.write(table + " X 3 " + "= "   + table*3  + "<br>");
// document.write(table + " X 4 " + "= "   + table*4  + "<br>");
// document.write(table + " X 5 " + "= "   + table*5  + "<br>");
// document.write(table + " X 6 " + "= "   + table*6  + "<br>");
// document.write(table + " X 7 " + "= "   + table*7  + "<br>");
// document.write(table + " X 8 " + "= "   + table*8  + "<br>");
// document.write(table + " X 9 " + "= "   + table*9  + "<br>");
// document.write(table + " X 10 " + "= "  + table*10 +"<br>");








// Q.NO6: Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)





// ANSWER OF QUESTION 6
let subject1 = prompt("Enter your 1st subject name");
let subject2 = prompt("Enter your 2nd subject name");
let subject3 = prompt("Enter your 3rd subject name");

let totalMarksOfSub1 = 100;
let totalMarksOfSub2 = 100;
let totalMarksOfSub3 = 100;
let totalMarks = (totalMarksOfSub1 + totalMarksOfSub2 + totalMarksOfSub3);

let obtainedMarksOfSub1 = +prompt("Enter your 1st Subject Obtained Marks");
let obtainedMarksOfSub2 = +prompt("Enter your 2nd Subject Obtained Marks");
let obtainedMarksOfSub3 = +prompt("Enter your 3rd Subject Obtained Marks");
let obtainedTotalMarks = (obtainedMarksOfSub1 + obtainedMarksOfSub2 + obtainedMarksOfSub3);

let totalObtainedMarks = (obtainedMarksOfSub1 + obtainedMarksOfSub2 + obtainedMarksOfSub3);
let percentage = (totalObtainedMarks * 100 / totalMarks);
// Now table form display
document.write("<table border='1'>");
document.write("<tr><th>Subjects</th><th>Total Marks</th><th>Obtained Marks</th><th>percentage</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarksOfSub1 + "</td><td>" + obtainedMarksOfSub1 + "</td><td>" + obtainedMarksOfSub1 * 100 / totalMarksOfSub1  + '%'  + "</td></tr>"  );
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarksOfSub2 + "</td><td>" + obtainedMarksOfSub2 + "</td><td>" + obtainedMarksOfSub2 * 100 / totalMarksOfSub2  + '%'  + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarksOfSub3 + "</td><td>" + obtainedMarksOfSub3 + "</td><td>" + obtainedMarksOfSub3 * 100 / totalMarksOfSub3  + '%'  + "</td></tr>");
document.write("<tr><td>" + "</td><td>" + totalMarks + "</td><td>" + obtainedTotalMarks + "</td><td>" + obtainedTotalMarks * 100 / totalMarks  + '%'  + "</td></tr>");
document.write("</table>");
