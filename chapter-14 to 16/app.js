// chapter  14 to 16 (ARRAYS)


// Q.NO1. Declare an empty array using JS literal notation to store
// student names in future.


// ANSWER OF QUESTION NO 1
// let stdName = [];


// -------------------------------------------------------------------------------------------------


// Q.NO2. Declare an empty array using JS object notation to store
// student names in future.


// ANSWER OF QUESTION NO 2
// let stdNames = new Array();


// -------------------------------------------------------------------------------------------------



// Q.NO3. Declare and initialize a strings array.



// ANSWER OF QUESTION NO 3
// let stringArr = ['my name is Ahmed Bilal'];


// -------------------------------------------------------------------------------------------------


// Q.NO4. Declare and initialize a numbers array.



// ANSWER OF QUESTION NO 4
// let numberArr = [123];


// -------------------------------------------------------------------------------------------------


// Q.NO5. Declare and initialize a boolean array.



// ANSWER OF QUESTION NO 5
// let booleanArr = [true,true,false];


// -------------------------------------------------------------------------------------------------


// Q.NO6. Declare and initialize a mixed array.



// ANSWER OF QUESTION NO 6
// let mixedArr = ['my name is Ahmed Bilal', 123, true, undefined, null];


// -------------------------------------------------------------------------------------------------


// Q.NO7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:



// ANSWER OF QUESTION NO 7
// let myQualification = ["1. SSC </br> 2. HSC </br> 3. BSCS"];
// document.write(myQualification);


// ------------------------------------------------------------------------------------------------


//Q.NO8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:


// ANSWER OF QUESTION NO 8
// let totalMarks = 500;
// let marks1 = parseInt(prompt("Enter Ahmed marks",500));
// let marks2 = parseInt(prompt("Enter Ali marks",400));
// let marks3 = parseInt(prompt("Enter Nawaz marks",300));
// let marks1Result = (marks1 * 100 / totalMarks);
// let marks2Result = (marks2 * 100 / totalMarks);
// let marks3Result = (marks3 * 100 / totalMarks);
// let stdMarks = [`Score of Ahmed is ${marks1}. Percentage: ${marks1Result}% </br> Score of Ali is ${marks2}. Percentage: ${marks2Result}% </br> Score of Nawaz is ${marks3}. Percentage: ${marks3Result}% </br>`];
// document.write(stdMarks);


// ------------------------------------------------------------------------------------------------



// Q.NO9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then 
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.



// ANSWER OF QUESTION NO 9
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.

// ANSWER OF a PART
// let color = ["red, green, blue"];
// let userColor = prompt("Enter a color to add to the beginning:");
// color.unshift(userColor);
// document.write(color);
// ------------------------------------
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.

// ANSWER OF b PART
// let color = ["red, green, blue"];
// let userColor = prompt("Enter a color to add to the end:");
// color.push(userColor);
// document.write(color);
// -----------------------------------
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.

// ANSWER OF c PART
// let color = ["red, green, blue"];
// let userColor1 = prompt("Enter first color to add to the beginning:");
// let userColor2 = prompt("Enter second color to add to the beginning:");
// color.unshift(userColor1, userColor2);
// document.write(color);
// ------------------------------------
// d. Delete the first color in the array. Display the updated
// array in your browser.

// ANSWER OF d PART
// let color = ["red", "green", "blue"];
// color.shift();
// console.log(color);
// ------------------------------------
// e. Delete the last color in the array. Display the updated
// array in your browser

// ANSWER OF e PART
// let color = ["red", "green", "blue"];
// color.pop();
// console.log(color);
// ------------------------------------
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.

// ANSWER OF f PART
// let colors = ["red", "green", "blue"];
// let index = +prompt("Enter the index to add a color:");
// let newColor = prompt("Enter the color:");
// colors.splice(index, 0, newColor);
// console.log(colors);
// ------------------------------------
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then 
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// ANSWER OF g PART
// colors = ["red", "green", "blue"];
// let index = +prompt("Enter the index to delete color(s):");
// let count = +prompt("Enter the number of colors to delete:");
// colors.splice(index, count);
// console.log(colors);

// ------------------------------------------------------------------------------------------------

// Q.NO10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// ANSWER OF QUESTION NO 10

// let studentScores = [85, 72, 93, 64, 91];
// studentScores.sort();
// console.log("Sorted student scores (ascending):", studentScores);

// ------------------------------------------------------------------------------------------------


// Q.NO11.Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// ANSWER OF QUESTION NO 11
// let heading1 = ("<h1>Cities list</h1>");
// let cities = ["karachi", "lahore", "peshawar", "quetta"];
// document.write(heading1);
// document.write(cities);
// let heading2 = ("<h1>Selected Cities list</h1>");
// let selectedCities = cities.slice(1,3);
// document.write(heading2);
// document.write(selectedCities);

// ------------------------------------------------------------------------------------------------

// Q.NO12 Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// ANSWER OF QUESTION NO 12
// let heading1 = ("<h1>ARRAYS</h1>");
// let arr = ["my", "name", "is", "Ahmed", "Bilal"]
// document.write(heading1);
// document.write(arr);
// let heading2 = ("<h1>STRING</h1>");
// document.write(heading2);
// let joinArr = arr.join(' ');
// document.write(joinArr);

// ------------------------------------------------------------------------------------------------

// Q.NO13 Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)


// ANSWER OF QUESTION NO 13
// Create an empty array to store the values
// var fifoArray = [];
// fifoArray.push(prompt("ENTER YOUR FIRST NAME"));
// fifoArray.push(prompt("ENTER YOUR LAST NAME"));
// fifoArray.push(prompt("ENTER YOUR FATHER NAME"));
// document.write("Array content before FIFO operation: " + fifoArray);
// fifoArray.shift();
// fifoArray.shift();
// fifoArray.shift();
// document.write("<br>Array content after FIFO operation: " + fifoArray);

// ------------------------------------------------------------------------------------------------


// Q.NO14 Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)


// ANSWER OF QUESTION NO 14
// var fifoArray = [];
// fifoArray.push(prompt("ENTER YOUR FIRST NAME"));
// fifoArray.push(prompt("ENTER YOUR LAST NAME"));
// fifoArray.push(prompt("ENTER YOUR FATHER NAME"));
// document.write("Array content before LIFO operation: " + fifoArray);
// fifoArray.pop();
// fifoArray.pop();
// fifoArray.pop();
// document.write("<br>Array content after LIFO operation: " + fifoArray);


let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
    
// Writing the select element
document.write("<select>");

// Adding options for each manufacturer without a for loop
document.write("<option value= " + manufacturers[0] + ">" + manufacturers[0] + "</option>");
document.write("<option value='" + manufacturers[1] + "'>" + manufacturers[1] + "</option>");
document.write("<option value='" + manufacturers[2] + "'>" + manufacturers[2] + "</option>");
document.write("<option value='" + manufacturers[3] + "'>" + manufacturers[3] + "</option>");
document.write("<option value='" + manufacturers[4] + "'>" + manufacturers[4] + "</option>");
document.write("<option value='" + manufacturers[5] + "'>" + manufacturers[5] + "</option>");

// Closing the select element
document.write("</select>");