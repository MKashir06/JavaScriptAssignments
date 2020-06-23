// /***************** Chapter 1 (Alert) ******************/
// // Task 1
// alert("Welcome to my website");

// // Task 2
// alert("Error! Please enter a valid password.");

// // Task 3
// alert("Welcome to JS Land...\nHappy Coding!");

// // Task 4
// alert("Welcome to JS Land...");
// alert("Happy Coding!");

// // Task 5
// alert("Hello... I can run JS through my web browser's console");




// /***************** Chapter 2 (Variables for Strings) ******************/
// // Task 1
// var username;

// // Task 2
// var myName = "Muhammad Kashir";

// // Task 3
// var message; //a
// message = "Hello World"; //b
// alert(message); //c

// // Task 4
// var fullName = "Muhammad Kashir";
// var age = "23 years old";
// var occupation = "Web and Mobile application developer";

// alert(fullName);
// alert(age);
// alert(occupation);

// // Task 5
// alert("PIZZA\nPIZZ\nPIZ\nPI\nP");

// // Task 6
// var email = "kashir3160@gmail.com";
// alert("My email address is " + email);

// // Task 7
// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the Book " + book);

// // Task 8
// document.write("Yah! I can write HTML content through JavaScript<br>");

// // Task 9
// var doodle = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(doodle);




// /***************** Chapter 3 (Variables for Numbers) ******************/
// // Task 1
// var age = 23;
// alert("I am " + age + " years old");

// // Task 2
// var visited = Math.random(10);
// var userVisited = Math.floor(visited);
// alert("You have visited this site " + userVisited + " times");

// // Task 3
// var birthYear = 1997;
// document.write("My birth year is " + birthYear + "<br>Data type of my declared variable is number<br>");

// // Task 4
// var visitor = prompt("Your Name ?");
// var productName = prompt("What product do you want ?");
// var quantity = prompt("How many quantity of products ?");
// document.write(visitor + " ordered " + quantity + " " + productName + "(s) on XYZ Clothing store<br>");




// /***************** Chapter 4 (Variable Names: Legal & Illegal) ******************/
// // Task 1
// var variable1, variable2, variable3;

// // Task 2
// /***Legal***/
// var name; //1
// var fullName2; //2
// var userName; //3
// var _product; //4
// var $email; //5
// /***Illegal***/
// var name#; //1
// var full % Name; //2
// var 3 thirdName; //3
// var & productName; //4
// var !emailAddress; //5

// // Task 3
// document.write("<h1>(a) Rules for naming JS variables</h1><br>");
// document.write("(b) Variable names can only contain numbers, $ and _. For example $my_1stVariable<br>")
// document.write("(c) Variables must begin with a letter, $ or _. For example $name, _name or name<br>")
// document.write("(d) Variable names are case sensitive<br>")
// document.write("(e) Variable names should not be JS keywords<br>")




// /***************** Chapter 5 (Math Expressions) ******************/
// // Task 1
// var a = 6;
// var b = 5;
// var c = a + b;
// document.write("Addition of " + a + " and " + b + " is " + c + "<br>");

// // Task 2
// /*** Subtraction ***/
// var d = 6;
// var e = 5;
// var f = a - b;
// document.write("Subtraction of " + d + " and " + e + " is " + f + "<br>");
// /*** Multiplication ***/
// var g = 6;
// var h = 5;
// var i = a * b;
// document.write("Multiplication of " + g + " and " + h + " is " + i + "<br>");
// /*** Division ***/
// var j = 6;
// var k = 5;
// var l = a / b;
// document.write("Division of " + j + " and " + k + " is " + l + "<br>");
// /*** Modulus ***/
// var m = 6;
// var n = 5;
// var o = a % b;
// document.write("Modulus of " + m + " and " + n + " is " + o + "<br>");

// // Task 3
// var numVar; //a
// document.write("Value after variable declaration is: " + numVar + "<br>"); //b
// numVar = 6; //c
// document.write("Initial value: " + numVar + "<br>"); //d
// numVar++; //e
// document.write("Value after increment is: " + numVar + "<br>"); //f
// numVar = numVar + 6; //g
// document.write("Value after addition is: " + numVar + "<br>"); //h
// numVar--; //i
// document.write("Value after decrement is: " + numVar + "<br>"); //j
// numVar = numVar % 3; //k
// document.write("The Remainder is: " + numVar + "<br>"); //l

// // Task 4
// var movieTicketPrice = 600;
// var ticketsBuy = movieTicketPrice * 5;
// document.write("Total cost to buy 5 tickets of a movie is " + ticketsBuy + "PKR <br>");

// // Task 5
// var tableName = +prompt("Enter number to print it's table");
// for (var i = 1; i <= 10; i++) {
//     document.write(tableName + " x " + i + " = " + tableName * i + "<br>");
// }

// // Task 6
// var tempCelsius = +prompt("Enter temperature in Celsius to convert it in Fahrenheit") //a
// var tempConvertFahrenheit = (tempCelsius * 9 / 5) + 32; //b
// var tempFahrenheit = +prompt("Enter temperature in Fahrenheit to convert it in Celsius") //c
// var tempConvertCelsius = (tempFahrenheit - 32) * 5 / 9; //d
// document.write(tempCelsius + "°C is " + tempConvertFahrenheit + "°F <br>");
// document.write(tempFahrenheit + "°F is " + tempConvertCelsius + "°C <br>");

// // Task 7
// document.write("<h1>Shopping Cart</h1>")
// var priceItem1 = +prompt("What is the price of item 1 ?"); //a
// var quantItem1 = +prompt("Quantity of item 1 ?"); //c
// var totalProd1 = priceItem1 * quantItem1;
// var priceItem2 = +prompt("What is the price of item 2 ?"); //b
// var quantItem2 = +prompt("Quantity of item 2 ?"); //d
// var totalProd2 = priceItem2 * quantItem2;
// var shippingCharges = 100;
// document.write("Price of item 1 is " + priceItem1 + "<br>");
// document.write("Quantity of item 1 is " + quantItem1 + "<br>");
// document.write("Price of item 2 is " + priceItem2 + "<br>");
// document.write("Quantity of item 2 is " + quantItem2 + "<br>");
// document.write("Shipping Charges " + shippingCharges + "<br><br>");
// document.write("Total cost of your order is " + (totalProd1 + totalProd2 + shippingCharges) + "<br>");

// // Task 8
// document.write("<h1>Marks Sheet</h1>");
// var totalMarks = +prompt("Enter total marks");
// var marksObtained = +prompt("Enter marks obtained");
// var percentageObtained = (marksObtained * 100) / totalMarks;
// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Marks Obtained: " + marksObtained + "<br>");
// document.write("Percentage: " + percentageObtained + "% <br>");

// // Task 9
// document.write("<h1>Currency in PKR</h1>");
// var currencyConvert = (10 * 104.80) + (25 * 28); // 10 US Dollars & 25 Saudi Riyals
// document.write("Total Currency in PKR: " + currencyConvert + "<br>");

// // Task 10
// var arithNum = (((3 + 5) * 10) / 2); //random number then plus by 5 then multiply by 10 then divide by 2
// document.write(arithNum + "<br>");

// // Task 11
// document.write("<h1>Age Calculator</h1>");
// var currentDate = new Date();
// var currentYear = currentDate.getFullYear(); //a
// var userBirthYear = +prompt("What is your birth year ?"); //b
// var userAge = currentYear - userBirthYear; //c
// document.write("Current Year: " + currentYear + "<br>");
// document.write("Your Birth Year: " + userBirthYear + "<br>");
// document.write("Your Age is: " + userAge + "<br>");

// // Task 12
// document.write("<h1>The Geometrizer</h1>");
// var radius = +prompt("Enter Radius of a Circle"); //a
// var circumference = 2 * 3.142 * radius;
// var area = 3.142 * radius * radius;
// document.write("Radius of a circle: " + radius + "<br>");
// document.write("The circumference is: " + circumference + "<br>");
// document.write("The area is: " + area + "<br>");

// // Task 13
// document.write("<h1>The Lifetime Supply Calculator</h1>");
// var myFavSnack = "Chipotle"; //a
// var myCurrentAge = 23; //b
// var maxAge = 70; //c
// var snackAmount = 2; //d
// var calcAmount = (maxAge - myCurrentAge) * snackAmount;
// document.write("You will need " + calcAmount + " to last you until the ripe old age of " + maxAge + "<br>")




// /***************** Chapter 6-9 (Math Expressions) ******************/
// // Task 1
// var numInput = +prompt("Write any number.");
// document.write("Result:<br>");
// document.write("The value of a is: " + numInput + "<br>");
// document.write("...........................................<br><br>");
// ++numInput;
// document.write("The value of ++a is: " + numInput + "<br>");
// document.write("Now the value of a is: " + numInput + "<br><br>");
// numInput++;
// document.write("The value of a++ is: " + numInput + "<br>");
// document.write("Now the value of a is: " + numInput + "<br><br>");
// --numInput;
// document.write("The value of --a is: " + numInput + "<br>");
// document.write("Now the value of a is: " + numInput + "<br><br>");
// numInput--;
// document.write("The value of a-- is: " + numInput + "<br>");
// document.write("Now the value of a is: " + numInput + "<br><br>");

// // Task 2
// var a = 2,
//     b = 1;
// var result = --a - --b + ++b + b--;
// document.write("Result is: " + result + "<br>");
// --a; //a
// document.write("The value of --a is: " + a + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");
// --a - --b; //b
// document.write("The value of --a - --b is: " + (a - b) + "<br>");
// document.write("Now the value of a & b is: " + a, b + "<br><br>");
// --a - --b + ++b; //c
// document.write("The value of --a - --b + ++b is: " + (a - b + b) + "<br>");
// document.write("Now the value of a & b is: " + a, b + "<br><br>");
// --a - --b + ++b + b--; //d
// document.write("The value of --a - --b + ++b + b-- is: " + (a - b + b + b) + "<br>");
// document.write("Now the value of a & b is: " + a, b + "<br><br>");

// // Task 3
// var userInput = prompt("What is your name ?");
// alert("Welcome " + userInput);

// // Task 4
// var userTable = +prompt("Enter number to print it's table");
// var elseNum = 5;
// if (userTable != "") {
//     for (var i = 1; i <= 10; i++) {
//         document.write(userTable + " x " + i + " = " + userTable * i + "<br>");
//     }
// } else {
//     for (var j = 1; j <= 10; j++) {
//         document.write(elseNum + " x " + j + " = " + elseNum * j + "<br>");
//     }
// }

// // Task 5
// var subject1 = prompt("Name of Subject 1"); //a
// var subject2 = prompt("Name of Subject 2"); //a
// var subject3 = prompt("Name of Subject 3"); //a 
// var totalMark = 100; //b
// var totalMarkAllSub = 300;
// var obtMarkSub1 = +prompt("Obtained marks of subject 1"); //c   
// var obtMarkSub2 = +prompt("Obtained marks of subject 2"); //d   
// var obtMarkSub3 = +prompt("Obtained marks of subject 3"); //d 
// var obtMark = obtMarkSub1 + obtMarkSub2 + obtMarkSub3;
// var percentSub1 = (obtMarkSub1 * 100) / totalMark;
// var percentSub2 = (obtMarkSub2 * 100) / totalMark;
// var percentSub3 = (obtMarkSub3 * 100) / totalMark;
// var percentAllSub = (obtMark * 100) / totalMarkAllSub
// document.write("<table><tr><td>Subject</td><td>Total Marks</td><td>Obtained Marks</td><td>Percentage</td></tr>  <tr><td>" + subject1 + "</td><td>" + totalMark + "</td><td>" + obtMarkSub1 + "</td><td>" + percentSub1 + "</td></tr>  <tr><td>" + subject2 + "</td><td>" + totalMark + "</td><td>" + obtMarkSub2 + "</td><td>" + percentSub2 + "</td></tr>  <tr><td>" + subject3 + "</td><td>" + totalMark + "</td><td>" + obtMarkSub3 + "</td><td>" + percentSub3 + "</td></tr>  <tr><td> </td><td>" + totalMarkAllSub + "</td><td>" + obtMark + "</td><td>" + percentAllSub + "</td></tr></table>")




// /***************** Chapter 9-11 (User Input and Conditional Statement) ******************/
// // Task 1
// var userCity = prompt("Enter City");
// if (userCity === "Karachi" || "karachi") {
//     alert("Welcome to city of lights");
// } else {
//     alert("Welcome");
// }

// // Task 2
// var userGender = prompt("Enter your gender");
// if (userGender === "Male" || "male") {
//     alert("Good Morning Sir");
// } else if (userGender === "Female" || "female") {
//     alert("Good Morning Ma’am");
// } else {
//     alert("Good Morning");
// }

// // Task 3
// var userSignalColor = prompt("Enter signal color");
// if (userSignalColor === "Red" || "red") {
//     alert("Must Stop");
// } else if (userSignalColor === "Yellow" || "yellow") {
//     alert("Ready to Move");
// } else if (userSignalColor === "Green" || "green") {
//     alert("Move now");
// }

// // Task 4
// var userCarFuel = +prompt("Enter fuel in your car (in litres)");
// if (userCarFuel < 0.25) {
//     alert("Please refill the fuel in your car");
// } else {
//     alert("No need of refilling fuel in car");
// }

// // Task 5
// var a = 4;
// /*** a ***/
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }
// /*** b ***/
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
// /*** c ***/
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }
// /*** d ***/
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
// /*** e ***/
// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }
// /*** f ***/
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }

// // Task 6
// var markSub1 = +prompt("Obtained marks of subject 1");
// var markSub2 = +prompt("Obtained marks of subject 2");
// var markSub3 = +prompt("Obtained marks of subject 3");
// var totalMark = +prompt("Total Marks");
// var obtMarks = markSub1 + markSub2 + markSub3;
// var percentAllSub = (obtMarks * 100) / totalMark;
// var grade, remarks;
// if (percentAllSub >= 80) {
//     grade = "A-one";
//     remarks = "Excellent";
// } else if (percentAllSub >= 70) {
//     grade = "A";
//     remarks = "Good";
// } else if (percentAllSub >= 60) {
//     grade = "B";
//     remarks = "You need to improve";
// } else {
//     grade = "Fail";
//     remarks = "Sorry";
// }
// document.write("<h1>Marks Sheet</h1>")
// document.write("Total Marks: " + totalMark + "<br>")
// document.write("Marks Obtained: " + obtMarks + "<br>")
// document.write("Percentage: " + percentAllSub + "%<br>")
// document.write("Grade: " + grade + "<br>")
// document.write("Remarks: " + remarks + "<br>")

// // Task 7
// var secNum = 6;
// var userGuessNum = +prompt("Guess the secret number (ranging from 1 - 10)");
// if (userGuessNum === 6) {
//     alert("Bingo! Correct answer");
// } else if (userGuessNum === 5) {
//     alert("Close enough to the correct answer");
// } else {
//     alert("Try Again!");
// }

// // Task 8
// var userNumToCheck = +prompt("Enter a number to check whether it is divisible by 3 or not");
// if (userNumToCheck % 3 == 0) {
//     alert(userNumToCheck + " is divisible by 3");
// } else {
//     alert(userNumToCheck + " is not divisible by 3");
// }

// // Task 9
// var userInputCheck = +prompt("Enter Number to check whether it is even or odd");
// if (userInputCheck % 2 == 0) {
//     alert(userInputCheck + " is even");
// } else {
//     alert(userInputCheck + " is odd");
// }

// // Task 10
// var userTempInput = +prompt("Enter temperature to check check whether it is hot or cold");
// if (userTempInput >= 40) {
//     alert("It is too hot outside.");
// } else if (userTempInput >= 30) {
//     alert("The Weather today is Normal.")
// } else if (userTempInput >= 20) {
//     alert("Today’s Weather is cool.");
// } else if (userTempInput >= 10) {
//     alert("OMG! Today’s weather is so Cool.");
// }

// // Task 11
// var userFirstNum = +prompt("Enter first number");
// var userSecondNum = +prompt("Enter second number");
// var userOperator = prompt("Enter operator");
// if (userOperator == "+") {
//     alert(userFirstNum + userSecondNum);
// } else if (userOperator == "-") {
//     alert(userFirstNum - userSecondNum);
// } else if (userOperator == "*") {
//     alert(userFirstNum * userSecondNum);
// } else if (userOperator == "/") {
//     alert(userFirstNum / userSecondNum);
// } else if (userOperator == "%") {
//     alert(userFirstNum % userSecondNum);
// }




// /***************** Chapter 12-13 (If...Else & Else If Statement, Testing Set of Conditions) ******************/
// // Task 1
// var userInputChar = prompt("Enter a character to know it is number, uppercase letter or lowercase letter")
// if (userInputChar >= 'A' && userInputChar <= 'Z') {
//     alert(userInputChar + " is an UpperCase character");
// } else if (userInputChar >= 'a' && userInputChar <= 'z') {
//     alert(userInputChar + " is a LowerCase character");
// } else if (userInputChar >= 0 && userInputChar <= 9) {
//     alert(userInputChar + " is a Number");
// }

// // Task 2
// var userInteger1 = +prompt("Write integer 1");
// var userInteger2 = +prompt("Write integer 2");
// if (userInteger1 == userInteger2) {
//     alert(userInteger1 + " & " + userInteger2 + " are equal");
// } else if (userInteger1 >= userInteger2) {
//     alert(userInteger1 + " is greater integer");
// } else {
//     alert(userInteger2 + " is greater integer");
// }

// // Task 3
// var integerUserInput = +prompt("Enter a number to check whether it is positive, negative or zero");
// if (integerUserInput > 0) {
//     alert(integerUserInput + " is positive number");
// } else if (integerUserInput < 0) {
//     alert(integerUserInput + " is negative number");
// } else {
//     alert(integerUserInput + " is zero");
// }

// // Task 4
// var userInputString = prompt("Enter a character of length 1");
// if (userInputString == 'a' || userInputString == 'A' || userInputString == 'e' || userInputString == 'E' || userInputString == 'i' || userInputString == 'I' || userInputString == 'o' || userInputString == 'O' || userInputString == 'u' || userInputString == 'U') {
//     alert("True");
// } else {
//     alert("False");
// }

// // Task 5
// var correctPass = "User123"; //a
// var userPass = prompt("Enter a Password"); //b
// if (userPass === "") {
//     alert("Please enter your password"); //i
// } else if (userPass === correctPass) {
//     alert("Correct! The password you entered matches the original password"); //ii
// } else {
//     alert("Incorrect password"); //ii
// }

// // Task 6
// /*** Fixing Code ***/
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

// // Task 7
// var userTimeInput = prompt("Enter time in 24 hours format (like: 1900 = 7pm)");
// if (userTimeInput >= 0000 && userTimeInput < 1200) {
//     alert("Good Morning!");
// } else if (userTimeInput >= 1200 && userTimeInput < 1700) {
//     alert("Good Afternoon!");
// } else if (userTimeInput >= 1700 && userTimeInput < 2100) {
//     alert("Good Evening!");
// } else if (userTimeInput >= 2100 && userTimeInput < 2359) {
//     alert("Good Night!");
// } else {
//     alert("Please enter correct time format");
// }




// /***************** Chapter 14-16 (Arrays) ******************/
// // Task 1
// var arr = [];

// // Task 2
// const myNewArray = new Array();

// // Task 3
// var stringArr = ["Atir", "Ahmed", "Kashir", "Aizam"];

// // Task 4
// var numArr = [1, 2, 3, 4, 5, 6];

// // Task 5
// var boolArr = [true];

// // Task 6
// var mixedArr = [7, "Arib", true];

// // Task 7
// var eduQualInPak = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"]
// var numToShow = 1;
// document.write("<h1> Qualifications: </h1> <br>");
// for (var i = 0; i <= eduQualInPak.length - 1; i++) {
//     document.write(numToShow + ") " + eduQualInPak[i] + "<br>");
//     numToShow++;
// }

// // Task 8
// var studentsNameArr = ["Atir", "Ahmed", "Kashir"];
// var studentsScoreArr = [485, 465, 450];
// var studentsTotalMark = 500;
// document.write("Score of " + studentsNameArr[0] + " is " + studentsScoreArr[0] + ". Percentage: " + ((studentsScoreArr[0] * 100) / studentsTotalMark) + "%<br>");
// document.write("Score of " + studentsNameArr[1] + " is " + studentsScoreArr[1] + ". Percentage: " + ((studentsScoreArr[1] * 100) / studentsTotalMark) + "%<br>");
// document.write("Score of " + studentsNameArr[2] + " is " + studentsScoreArr[2] + ". Percentage: " + ((studentsScoreArr[2] * 100) / studentsTotalMark) + "%<br>");

// // Task 9
// var colorsArr = ["Red", "Yellow", "Green", "Blue", "Brown", "Purple", "Black", "White", "Violet"]
// for (var i = 0; i <= colorsArr.length - 1; i++) {
//     document.write(colorsArr[i] + "<br>");
// }
// var askUserForColorAtStart = prompt("What color do you want to add at beginning"); //a
// colorsArr.unshift(askUserForColorAtStart);
// for (var i = 0; i <= colorsArr.length - 1; i++) {
//     document.write(colorsArr[i] + "<br>");
// }
// var askUserForColorAtEnd = prompt("What color do you want to add at end"); //b
// colorsArr.push(askUserForColorAtEnd);
// for (var i = 0; i <= colorsArr.length - 1; i++) {
//     document.write(colorsArr[i] + "<br>");
// }
// colorsArr.unshift("Indigo", "Orange"); //c
// for (var i = 0; i <= colorsArr.length - 1; i++) {
//     document.write(colorsArr[i] + "<br>");
// }
// colorsArr.shift(); //d
// for (var i = 0; i <= colorsArr.length - 1; i++) {
//     document.write(colorsArr[i] + "<br>");
// }
// colorsArr.pop(); //e
// for (var i = 0; i <= colorsArr.length - 1; i++) {
//     document.write(colorsArr[i] + "<br>");
// }
// var askUserForIndex = +prompt("At which index you want to add a color"); //f
// var askUserForIndexColor = prompt("Enter color name");
// colorsArr.splice(askUserForIndex, 0, askUserForIndexColor);
// for (var i = 0; i <= colorsArr.length - 1; i++) {
//     document.write(colorsArr[i] + "<br>");
// }
// var askUserForIndexToDel = +prompt("At which index you want to delete a color"); //g
// var askUserForNumToDelColor = +prompt("How many colors you want to delete");
// colorsArr.splice(askUserForIndexToDel, askUserForNumToDelColor);
// for (var i = 0; i <= colorsArr.length - 1; i++) {
//     document.write(colorsArr[i] + "<br>");
// }

// // Task 10
// var studentsScoreArr = [320, 440, 500, 120, 355];
// document.write("Score of Students: " + studentsScoreArr + "<br>");

// function sortNumArray() {
//     studentsScoreArr.sort(function(a, b) { return a - b });
//     document.write("Ordered Score of Students: " + studentsScoreArr + "<br>");
// }
// sortNumArray()

// // Task 11
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
// document.write("Cities list:<br>" + cities + "<br>");
// var selectedCities = cities.slice(2, 5);
// document.write("Selected cities list:<br>" + selectedCities + "<br>");

// // Task 12
// var arrToJoin = ["This", "is", "my", "cat"];
// var joinArr = arrToJoin.join();
// document.write("Array:<br>");
// document.write(joinArr);

// // Task 13
// var fifoArr = ["Keyboard", "Mouse", "Printer", "Monitor"];
// var fifoArrJoin = fifoArr.join();
// document.write("Devices: <br>");
// document.write(fifoArrJoin + "<br>");
// for (var i = 0; i <= fifoArr.length - 1; i++) {
//     document.write("Out: <br>");
//     document.write(fifoArr[i] + "<br>");
// }

// // Task 14
// var lifoArr = ["Keyboard", "Mouse", "Printer", "Monitor"];
// var lifoArrJoin = lifoArr.join();
// var lifoArrReverse = lifoArr.reverse();
// document.write("Devices: <br>");
// document.write(lifoArrJoin + "<br>");
// for (var i = 0; i <= lifoArr.length - 1; i++) {
//     document.write("Out: <br>");
//     document.write(lifoArr[i] + "<br>");
// }

// // Task 15
// var phoneManArr = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select><option>Dropdown</option><option>" + phoneManArr[0] + "</option><option>" + phoneManArr[1] + "</option><option>" + phoneManArr[2] + "</option><option>" + phoneManArr[3] + "</option><option>" + phoneManArr[4] + "</option><option>" + phoneManArr[5] + "</option></select><br><br>");




// /***************** Chapter 17-20 (Arrays and Loop) ******************/
// // Task 1
// var multiDimensionArr = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ];

// // Task 2
// var multiDimensionArrMatrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];
// for (var i = 0; i <= multiDimensionArrMatrix.length - 1; i++) {
//     document.write(multiDimensionArrMatrix[i] + "<br>");
// }

// // Task 3
// var numCounting = 10;
// for (var i = 1; i <= numCounting; i++) {
//     document.write(i + "<br>");
// }

// // Task 4
// var askUserTable = +prompt("Enter a number to show its multiplication table");
// var askUserTableLength = +prompt("Enter length multiplication table");
// for (var i = 1; i <= askUserTableLength; i++) {
//     document.write(askUserTable + " x " + i + " = " + askUserTable * i + "<br>");
// }

// // Task 5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i <= fruits.length - 1; i++) {
//     document.write(fruits[i] + "<br>")
// }
// for (var i = 0; i <= fruits.length - 1; i++) {
//     document.write("Element at index " + [i] + " is " + fruits[i] + "<br>")
// }

// // Task 6
// document.write("<h3>Counting:</h3>");
// for (var i = 1; i <= 15; i++) {
//     document.write([i] + ", ");
// }
// document.write("<h3>Reverse Counting:</h3>");
// for (var i = 10; i >= 1; i--) {
//     document.write([i] + ", ");
// }
// document.write("<h3>Even:</h3>");
// for (var i = 0; i <= 20; i++) {
//     document.write([i] + ", ");
//     i++;
// }
// document.write("<h3>Odd:</h3>");
// for (var i = 1; i <= 20; i++) {
//     document.write([i] + ", ");
//     i++;
// }
// document.write("<h3>Series:</h3>");
// for (var i = 2; i <= 20; i++) {
//     document.write([i] + "k, ");
//     i++;
// }

// // Task 7
// var bakeryItemsArr = ["cake", "apple pie", "cookies", "chips", "patties"];
// var askUserBuy = prompt("Welcome to ABC bakery. What do you want to order sir/ma'am?");
// switch (askUserBuy) {
//     case "cake":
//         document.write(askUserBuy + " is <strong>available</strong> at index 0 in our bakery <br>");
//         break;
//     case "apple pie":
//         document.write(askUserBuy + " is <strong>available</strong> at index 1 in our bakery <br>");
//         break;
//     case "cookie":
//         document.write(askUserBuy + " is <strong>available</strong> at index 2 in our bakery <br>");
//         break;
//     case "chips":
//         document.write(askUserBuy + " is <strong>available</strong> at index 3 in our bakery <br>");
//         break;
//     case "patties":
//         document.write(askUserBuy + " is <strong>available</strong> at index 4 in our bakery <br>");
//         break;
//     default:
//         document.write("<br>We are sorry. " + askUserBuy + " is <strong>not available</strong> in our bakery <br>");
//         break;
// }

// // Task 8
// var numArray = [24, 53, 78, 91, 12];
// var largestNum = 0;
// for (var i = 0; i <= largestNum; i++) {
//     if (numArray[i] > largestNum) {
//         var largestNum = numArray[i];
//     }
// }
// document.write("<br>Array items: " + numArray + " <br>");
// document.write("The largest number is " + largestNum + "<br>");

// // Task 9
// var numberArray = [24, 53, 78, 91, 12];
// var smallestNum = 100;
// for (var i = 0; i <= numberArray.length; i++) {
//     if (numberArray[i] < smallestNum) {
//         smallestNum = numberArray[i];
//     }
// }
// document.write("<br>Array items: " + numberArray + " <br>");
// document.write("The smallest number is " + smallestNum + "<br>");

// // Task 10
// for (var i = 5; i <= 100; i++) {
//     document.write(i + ", ");
//     i = i + 4;
// }







/************************ASSIGNMENT NO.6*********************************/

// /***************** Chapter 21-25 (String Methods) ******************/
// // Task 1
// var userFirstName = prompt("Enter your first name");
// var userLastName = prompt("Enter your last name");
// var userFullName = userFirstName + " " + userLastName;
// alert("Welcome " + userFullName);

// // Task 2
// var userFavPhone = prompt("Which is your favorite phone?");
// document.write("My Favorite phone is: " + userFavPhone + "<br>");
// var userFavPhoneLength = userFavPhone.length;
// document.write("Length of string: " + userFavPhoneLength + "<br>");

// // Task 3
// var str = "Pakistani";
// var indexOfStr = str.indexOf('n');
// document.write("String: " + str + "<br>");
// document.write("Index of 'n': " + indexOfStr + "<br>");

// // Task 4
// var strHello = "Hello World";
// var lastIndexOfStr = strHello.lastIndexOf('l');
// document.write("String: " + strHello + "<br>");
// document.write("Last index of 'l': " + lastIndexOfStr + "<br>");

// // Task 5
// var str = "Pakistani";
// var charOfStr = str[3];
// document.write("String: " + str + "<br>");
// document.write("Character at index 3: " + charOfStr + "<br>");

// // Task 6
// var str1 = "Muhammad";
// var str2 = "Kashir";
// document.write(str1 + " <br>");
// document.write(str2 + " <br>");
// var strConcat = str1.concat(str2);
// document.write(strConcat + " " + " <br>");

// // Task 7
// var cityToReplace = "Hyderabad";
// var cityReplaced = cityToReplace.replace("Hyder", "Islam");
// document.write("City: " + cityToReplace + "<br>");
// document.write("After replacement: " + cityReplaced + "<br>");

// // Task 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var messageReplace = message.replace(/and/g, "&");
// document.write("Message: " + message + "<br>");
// document.write("After message replacement: " + messageReplace + "<br>");

// // Task 9
// var userNumString = prompt("Enter any number");
// var userNumInt = parseInt(userNumString);
// document.write("Value: " + userNumString + "<br>");
// document.write("Type: " + typeof(userNumString) + "<br>");
// document.write("Value: " + userNumInt + "<br>");
// document.write("Value: " + typeof(userNumInt) + "<br>");

// // Task 10
// var userInputLower = prompt("Enter any lower case word");
// var userInputConvertUpper = userInputLower.toUpperCase();
// document.write("User input: " + userInputLower + "<br>");
// document.write("Upper case: " + userInputConvertUpper + "<br>");

// // Task 11
// var userInput = prompt("Enter any word to titalize it");
// var userInputConvertTitle = userInput.replace(userInput[0], userInput[0].toUpperCase());
// document.write("User input: " + userInput + "<br>");
// document.write("Upper case: " + userInputConvertTitle + "<br>");

// // Task 12
// var num = 35.36;
// num = num.toString();
// var removeDot = num.replace(".", "");
// document.write("Number: " + num + "<br>");
// document.write("Result: " + removeDot + "<br>");

// // Task 13
// var userUsername = prompt("Enter valid username");
// for (var i = 0; i <= userUsername.length; i++) {
//     if (userUsername[i] === "!" || userUsername[i] === "," || userUsername[i] === "." || userUsername[i] === "@" || userUsername[i] === "#" || userUsername[i] === "$" || userUsername[i] === "%" || userUsername[i] === "&" || userUsername[i] === "^" || userUsername[i] === "*") {
//         alert("Please enter a valid username");
//     }
// }

// // Task 14
// var bakeryItemsArr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var askUserBuy = prompt("Welcome to ABC bakery. What do you want to order sir/ma'am?");
// var userInputConvert = askUserBuy.toLowerCase();
// switch (userInputConvert) {
//     case "cake":
//         document.write(askUserBuy + " is <strong>available</strong> at index 0 in our bakery <br>");
//         break;
//     case "apple pie":
//         document.write(askUserBuy + " is <strong>available</strong> at index 1 in our bakery <br>");
//         break;
//     case "cookie":
//         document.write(askUserBuy + " is <strong>available</strong> at index 2 in our bakery <br>");
//         break;
//     case "chips":
//         document.write(askUserBuy + " is <strong>available</strong> at index 3 in our bakery <br>");
//         break;
//     case "patties":
//         document.write(askUserBuy + " is <strong>available</strong> at index 4 in our bakery <br>");
//         break;
//     default:
//         document.write("<br>We are sorry. " + askUserBuy + " is <strong>not available</strong> in our bakery <br>");
//         break;
// }

// // Task 15
// var userPassCheck = prompt("Enter Password");
// if (userPassCheck.charCodeAt(0) >= 48 && userPassCheck.charCodeAt(0) <= 57) {
//     var alteredPass = prompt("Password cannot begin with a number \nPlease enter a valid password");
//     userPassCheck = alteredPass;
//     if (userPassCheck.charCodeAt(0) >= 65 && userPassCheck.charCodeAt(0) <= 90 || userPassCheck.charCodeAt(0) >= 97 && userPassCheck.charCodeAt(0) <= 122) {
//         var alteredPass = prompt("Password must contain numbers");
//         userPassCheck = alteredPass;
//         if (userPassCheck.length < 6) {
//             var alteredPass = prompt("Password must at least 6 characters long");
//             userPassCheck = alteredPass;
//             if (userPassCheck.charCodeAt(userPassCheck.length) != 48 && userPassCheck.charCodeAt(userPassCheck.length) != 49 && userPassCheck.charCodeAt(userPassCheck.length) != 50 && userPassCheck.charCodeAt(userPassCheck.length) != 51 && userPassCheck.charCodeAt(userPassCheck.length) != 52 && userPassCheck.charCodeAt(userPassCheck.length) != 53 && userPassCheck.charCodeAt(userPassCheck.length) != 54 && userPassCheck.charCodeAt(userPassCheck.length) != 55 && userPassCheck.charCodeAt(userPassCheck.length) != 56 && userPassCheck.charCodeAt(userPassCheck.length) != 57) {
//                 document.write("Your password is perfect <br>");
//             }
//         }
//     }
// }
// document.write("Entered Password: " + userPassCheck + "<br>");

// // Task 16
// var university = "University of Karachi";
// document.write(university + "<br>");
// var universitySplit = university.split("");
// for (var i = 0; i < universitySplit.length; i++) {
//     document.write(universitySplit[i] + "<br>");
// }

// // Task 17
// var userLastInputShow = prompt("Enter a word");
// var lastCharInput = userLastInputShow.charAt(userLastInputShow.length - 1);
// document.write("User Input: " + userLastInputShow + "<br>");
// document.write("Last character of input: " + lastCharInput + "<br>");

// // Task 18
// function count(main_str, sub_str) {
//     main_str += '';
//     sub_str += '';

//     if (sub_str.length <= 0) {
//         return main_str.length + 1;
//     }

//     subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
//     return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
// }
// var sentenceString = "The quick brown fox jumps over the lazy dog";
// var wordToFind = "the";
// var wordCount = count(sentenceString, 'the');
// document.write("Text: " + sentenceString + "<br>");
// document.write("There are " + wordCount + " occurrence(s) of word '" + wordToFind + "'<br>");





// /***************** Chapter 26-30 (Math Methods) ******************/
// // Task 1
// var userInputNum = +prompt("Enter a positive integer");
// document.write("Number: " + userInputNum + "<br>"); //a
// var userInputNumRound = Math.round(userInputNum);
// document.write("Round off value: " + userInputNumRound + "<br>"); //b
// var userInputNumFloor = Math.floor(userInputNum);
// document.write("Floor value: " + userInputNumFloor + "<br>"); //b
// var userInputNumCeil = Math.ceil(userInputNum);
// document.write("Ceil value: " + userInputNumCeil + "<br>"); //b

// // Task 2
// var userInputNegativeNum = +prompt("Enter a negative floating point");
// document.write("Number: " + userInputNegativeNum + "<br>"); //a
// var userInputNegativeNumRound = Math.round(userInputNegativeNum);
// document.write("Round off value: " + userInputNegativeNumRound + "<br>"); //b
// var userInputNegativeNumFloor = Math.floor(userInputNegativeNum);
// document.write("Floor value: " + userInputNegativeNumFloor + "<br>"); //b
// var userInputNegativeNumCeil = Math.ceil(userInputNegativeNum);
// document.write("Ceil value: " + userInputNegativeNumCeil + "<br>"); //b

// // Task 3
// var userInputValue = +prompt("Enter a number to know its absolute value");
// var userInputAbsolute = Math.abs(userInputValue);
// document.write("The absolute value of " + userInputValue + " is " + userInputAbsolute + "<br>");

// // Task 4
// var diceRandom = Math.random();
// var diceRange = (diceRandom * 6) + 1;
// var diceFloor = Math.floor(diceRange);
// document.write("Random dice value: " + diceFloor + "<br>");

// // Task 5
// var randomCoin = Math.random();
// var coinRange = (randomCoin * 2) + 1;
// var coinFloor = Math.floor(coinRange);
// if (coinFloor == 1) {
//     coinFloor = "Heads";
//     document.write("Random coin value: " + coinFloor + "<br>");
// } else {
//     coinFloor = "Tails";
//     document.write("Random coin value: " + coinFloor + "<br>");
// }

// // Task 6
// var randomNum1To100 = Math.random();
// var randomNumRange = (randomNum1To100 * 100) + 1;
// var randomNumFloor = Math.floor(randomNumRange);
// document.write("Random number between 1 to 100: " + randomNumFloor + "<br>");

// // Task 7
// var userWeight = prompt("Enter your weight in kilograms");
// document.write("The weight of user is " + userWeight + " kilograms <br>");

// // Task 8
// var secretRandomNum = Math.random();
// var secretRandomNumRange = (secretRandomNum * 10) + 1;
// var secretRandomNumFloor = Math.floor(secretRandomNumRange);
// var userInputNum = +prompt("Enter a number between 1 to 10");
// if (secretRandomNumFloor === userInputNum) {
//     alert("Congratulations you guess the secret number");
// } else {
//     alert("Try again!");
// }





// /***************** Chapter 31-34 (Date Methods) ******************/
// // Task 1
// var currentDate = new Date();
// document.write(currentDate + "<br>");

// // Task 2
// var currentMonth = currentDate.getMonth();
// switch (currentMonth) {
//     case 0:
//         currentMonth = "January";
//         break;
//     case 1:
//         currentMonth = "February";
//         break;
//     case 2:
//         currentMonth = "March";
//         break;
//     case 3:
//         currentMonth = "April";
//         break;
//     case 4:
//         currentMonth = "May";
//         break;
//     case 5:
//         currentMonth = "June";
//         break;
//     case 6:
//         currentMonth = "July";
//         break;
//     case 7:
//         currentMonth = "August";
//         break;
//     case 8:
//         currentMonth = "September";
//         break;
//     case 9:
//         currentMonth = "October";
//         break;
//     case 10:
//         currentMonth = "November";
//         break;
//     case 11:
//         currentMonth = "December";
//         break;
//     default:
//         currentMonth = "Not Any";
//         break;
// }
// document.write("Current Month " + currentMonth + "<br>");

// // Task 3 & 4
// var currentDay = currentDate.getDay();
// switch (currentDay) {
//     case 0:
//         currentDay = "Sun";
//         document.write("It's Fun Day <br>");
//         break;
//     case 1:
//         currentDay = "Mon";
//         break;
//     case 2:
//         currentDay = "Tue";
//         break;
//     case 3:
//         currentDay = "Wed";
//         break;
//     case 4:
//         currentDay = "Thu";
//         break;
//     case 5:
//         currentDay = "Fri";
//         break;
//     case 6:
//         currentDay = "Sat";
//         document.write("It's Fun Day <br>");
//         break;
//     default:
//         currentDay = "Not Any";
//         break;
// }
// document.write("Today is " + currentDay + "<br>");

// // Task 5
// var daysOfMonth = currentDate.getDate();
// if (daysOfMonth > 0 && daysOfMonth < 16) {
//     document.write("First fifteen days of the month");
// } else {
//     document.write("Last fifteen days of the month");
// }

// // Task 6
// var currentDate1 = new Date();
// var currentMilSecondSince1970 = currentDate1.getTime();
// var currentMinutesSince1970 = currentMilSecondSince1970 * 1000 * 60 * 60;
// document.write("Current date: " + currentDate1 + "<br>")
// document.write("Elapsed milliseconds since January 1, 1970: " + currentMilSecondSince1970 + "<br>")
// document.write("Elapsed minutes since January 1, 1970: " + currentMinutesSince1970 + "<br>")

// // Task 7
// var currentHour = currentDate1.getHours();
// if (currentHour < 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }

// if (currentHour == 0) {
//     document.write("It's midnight");
// } else if (currentHour > 0 && currentHour < 12) {
//     document.write("It's morning");
// } else if (currentHour == 12) {
//     document.write("It's noon");
// } else if (currentHour > 12 && currentHour < 18) {
//     document.write("It's afternoon");
// } else if (currentHour > 18 && currentHour < 22) {
//     document.write("It's evening");
// } else if (currentHour > 22 && currentHour < 24) {
//     document.write("It's night");
// }

// // Task 8
// var laterDate = new Date("Dec 31, 2020");
// document.write("Later Date: " + laterDate + "<br>");

// // Task 9
// var ramadanDate2015 = new Date("Jun 18, 2015");
// var ramadanDate2015Time = ramadanDate2015.getTime();
// var currentYearRamadan = new Date("April 26, 2020");
// var currentYearRamadanTime = currentYearRamadan.getTime();

// var Diff = currentYearRamadanTime - ramadanDate2015Time;
// var realDiff = Diff / (1000 * 60 * 60 * 24);
// document.write(realDiff + " days have passed since 1st Ramadan, 2015: <br>");

// // Task 10
// var refDate = new Date("Dec 5, 2015 22:50:16");
// document.write("On reference date " + refDate + "<br>");
// var refDateTime = refDate.getTime();
// var refDateTimeConvert = refDateTime / (1000 * 60);
// document.write(Math.floor(refDateTimeConvert) + " seconds had passed since beginning of 2015: <br>");

// // // Task 11
// // var currentDate2 = new Date();
// // document.write("Current date: " + currentDate2 + "<br>");
// // var currentDate2Extract = currentDate2.getHours();
// // document.write("Current hours: " + currentDate2Extract + "<br>");
// // document.write("One hours ago, it was: " + new Date().getHours(currentDate2Extract - 1) + "<br>");
// // document.write("One hours ago, it was: " + currentDate2 + "<br>");

// // // Task 12

// // Task 13
// var userCurrentAge = +prompt("What is yor age");
// document.write("Your age is " + userCurrentAge + "<br>");
// switch (userCurrentAge) {
//     case 10:
//         document.write("Your birth year is 2010 <br>");
//         break;
//     case 11:
//         document.write("Your birth year is 2009 <br>");
//         break;
//     case 12:
//         document.write("Your birth year is 2008 <br>");
//         break;
//     case 13:
//         document.write("Your birth year is 2007 <br>");
//         break;
//     case 14:
//         document.write("Your birth year is 2006 <br>");
//         break;
//     case 15:
//         document.write("Your birth year is 2005 <br>");
//         break;
//     case 16:
//         document.write("Your birth year is 2004 <br>");
//         break;
//     case 17:
//         document.write("Your birth year is 2003 <br>");
//         break;
//     case 18:
//         document.write("Your birth year is 2002 <br>");
//         break;
//     case 19:
//         document.write("Your birth year is 2001 <br>");
//         break;
//     case 20:
//         document.write("Your birth year is 2000 <br>");
//         break;
//     case 21:
//         document.write("Your birth year is 1999 <br>");
//         break;
//     case 22:
//         document.write("Your birth year is 1998 <br>");
//         break;
//     case 23:
//         document.write("Your birth year is 1997 <br>");
//         break;
//     case 24:
//         document.write("Your birth year is 1996 <br>");
//         break;
//     case 25:
//         document.write("Your birth year is 1995 <br>");
//         break;
//     case 26:
//         document.write("Your birth year is 1994 <br>");
//         break;
//     case 27:
//         document.write("Your birth year is 1993 <br>");
//         break;
//     case 28:
//         document.write("Your birth year is 1992 <br>");
//         break;
//     case 29:
//         document.write("Your birth year is 1991 <br>");
//         break;
//     case 30:
//         document.write("Your birth year is 1990 <br>");
//         break;
//     case 31:
//         document.write("Your birth year is 1989 <br>");
//         break;
//     case 32:
//         document.write("Your birth year is 1988 <br>");
//         break;
//     case 33:
//         document.write("Your birth year is 1987 <br>");
//         break;
//     case 34:
//         document.write("Your birth year is 1986 <br>");
//         break;
//     case 35:
//         document.write("Your birth year is 1985 <br>");
//         break;
//     case 36:
//         document.write("Your birth year is 1984 <br>");
//         break;
//     case 37:
//         document.write("Your birth year is 1983 <br>");
//         break;
//     case 38:
//         document.write("Your birth year is 1982 <br>");
//         break;
//     case 39:
//         document.write("Your birth year is 1981 <br>");
//         break;
//     case 40:
//         document.write("Your birth year is 1980 <br>");
//         break;
//     case 41:
//         document.write("Your birth year is 1979 <br>");
//         break;
//     case 42:
//         document.write("Your birth year is 1978 <br>");
//         break;
//     case 43:
//         document.write("Your birth year is 1977 <br>");
//         break;
//     case 44:
//         document.write("Your birth year is 1976 <br>");
//         break;
//     case 45:
//         document.write("Your birth year is 1975 <br>");
//         break;
//     case 46:
//         document.write("Your birth year is 1974 <br>");
//         break;
//     case 47:
//         document.write("Your birth year is 1973 <br>");
//         break;
//     case 48:
//         document.write("Your birth year is 1972 <br>");
//         break;
//     case 49:
//         document.write("Your birth year is 1971 <br>");
//         break;
//     case 50:
//         document.write("Your birth year is 1970 <br>");
//         break;
//     default:
//         document.write("You have not enter your correct age <br>");
//         break;
// }

// // Task 14
// var customerName = prompt("What is your name"); //a 
// var numOfUnits = Math.random() * 299; //b
// var numOfUnitsRound = Math.round(numOfUnits).toFixed(2); //c
// var chargesPerUnit; //d
// if (numOfUnits >= 0 && numOfUnits <= 99) {
//     chargesPerUnit = 11;
// } else if (numOfUnits >= 100 && numOfUnits <= 199) {
//     chargesPerUnit = 12;
// } else if (numOfUnits >= 200 && numOfUnits <= 299) {
//     chargesPerUnit = 14;
// }

// var netAmount = numOfUnitsRound * chargesPerUnit; //e
// var latePayment; //f
// if (netAmount >= 0 && netAmount <= 999) {
//     latePayment = 110;
// } else if (netAmount >= 1000 && netAmount <= 1999) {
//     latePayment = 220;
// } else if (netAmount >= 2000 && netAmount <= 2999) {
//     latePayment = 304;
// } else if (netAmount >= 3000 && netAmount <= 3999) {
//     latePayment = 390;
// }
// var grossAmount = netAmount + latePayment; //g

// document.write("<h1> K-Electric Bill </h1> <br>");
// document.write("Customer Name: " + customerName + "<br>");
// document.write("Month: " + currentMonth + "<br>");
// document.write("Number of units: " + numOfUnitsRound + "<br>");
// document.write("Charges per unit: " + chargesPerUnit + "<br><br>");

// document.write("Net Amount Payable (within Due Date): " + netAmount + "<br>");
// document.write("Late payment surcharge: " + latePayment + "<br>");
// document.write("Gross Amount Payable (after Due Date): " + grossAmount + "<br>");





// /***************** Chapter 35-38 (Function) ******************/
// // Task 1
// function currentDateTimeFunc() {
//     var currentDateTime = new Date();
//     document.write(currentDateTime + "<br>");
// }
// currentDateTimeFunc();

// // Task 2
// function greetUserFullName() {
//     var firstName = prompt("Your first name");
//     var lastName = prompt("Your last name");
//     alert("Welcome " + firstName + " " + lastName);
// }
// greetUserFullName();

// // Task 3
// function sumOfTwoInputs() {
//     var num1 = +prompt("Enter first number to add it to second number");
//     var num2 = +prompt("Enter second number");
//     var sum = num1 + num2;
//     alert(sum);
// }
// sumOfTwoInputs();

// Task 4
// function threeInputCalc() {
//     var userInput1 = +prompt("Enter first number");
//     var operator = prompt("Enter operator");
//     var userInput2 = +prompt("Enter second number");
//     var result;
//     if (operator == "+") {
//         result = userInput1 + userInput2;
//     } else if (operator == "-") {
//         result = userInput1 - userInput2;
//     } else if (operator == "*") {
//         result = userInput1 * userInput2;
//     } else if (operator == "/") {
//         result = userInput1 / userInput2;
//     }
//     alert(result);
// }
// threeInputCalc();

// // Task 5
// function squareArgument(arg) {
//     var userArgNum = arg * arg;
//     alert(userArgNum);
// }
// squareArgument(+prompt("Enter a number to square it"));

// // Task 6
// function factorialOfNum(num) {
//     if (num === 0) {
//         return 1;
//     }
//     return num * factorialOfNum(num - 1);
// }
// alert(factorialOfNum(+prompt("Enter a number to know it's factorial")));

// // Task 7
// function countingFromUser() {
//     var num1 = +prompt("Enter number from where to start counting");
//     var num2 = +prompt("Enter number where to end counting");
//     for (var i = num1; i <= num2; i++) {
//         document.write(i + "<br>");
//     }
// }
// countingFromUser();

// // Task 8
// function calculateHypotenuse(base, perpend) {
//     return Math.sqrt(base * base + perpend * perpend);
// }
// document.write(calculateHypotenuse(+prompt("Enter base of a right angle triangle"), +prompt("Enter perpendicular of a right angle triangle")));

// // Task 9
// /*** i ***/
// function areaOfRectangleArgAsValue(width, height) {
//     var widthInput = width;
//     var heightInput = height;
//     var areaCalc = widthInput * heightInput;
//     document.write("Area of Rectangle is: " + areaCalc + "<br>");
// }
// areaOfRectangleArgAsValue(+prompt("Enter width of rectangle to know it's area"), +prompt("Enter height of rectangle to know it's area"));
// /*** ii ***/
// function areaOfRectangleArgAsVariable(width, height) {
//     var width = +prompt("Enter width of rectangle to know it's area");
//     var height = +prompt("Enter height of rectangle to know it's area");
//     var areaCalc = width * height;
//     document.write("Area of Rectangle is: " + areaCalc + "<br>");
// }
// areaOfRectangleArgAsVariable();

// // Task 10
// function palindromeCheck(userInput) {
//     var replaceWords = /[^A-Za-z0-9]/g;
//     userInput = userInput.toLowerCase().replace(replaceWords, '');
//     var lengthOfUserInput = userInput.length;
//     for (var i = 0; i < lengthOfUserInput / 2; i++) {
//         if (userInput[i] !== userInput[lengthOfUserInput - 1 - i]) {
//             document.write(userInput + " is <strong>not</strong> a Palindrome <br>");
//             return false;
//         }
//     }
//     document.write(userInput + " is Palindrome <br>");
//     return true;
// }
// palindromeCheck(prompt("Enter a word check it is palindrome or not"));

// // Task 11
// function uppercaseFirstLetter(sentence) {
//     document.write("String: " + sentence + "<br>");
//     var splitSentence = sentence.split(' ');
//     var newArr = [];
//     for (var i = 0; i < splitSentence.length; i++) {
//         newArr.push(splitSentence[i].charAt(0).toUpperCase() + splitSentence[i].slice(1));
//     }
//     return newArr.join(' ');
// }
// document.write("Output: " + uppercaseFirstLetter("the quick brown fox"));

// // Task 12
// function longestWord(sentenceInput) {
//     document.write("String: " + sentenceInput + "<br>");
//     var matchSentence = sentenceInput.match(/\w[a-z]{0,}/gi);
//     var resultSentence = matchSentence[0];
//     for (var i = 1; i < matchSentence.length; i++) {
//         if (resultSentence.length < matchSentence[i].length) {
//             resultSentence = matchSentence[i];
//         }
//     }
//     return resultSentence;
// }
// document.write("Output: " + longestWord('Web Development Tutorial'));

// // Task 13
// function charCount(string, letter) {
//     document.write("Argument: " + string + "<br>");
//     document.write("Letter to find: " + letter + "<br>");
//     var letterCount = 0;
//     for (var i = 0; i < string.length; i++) {
//         if (string.charAt(i) == letter) {
//             letterCount += 1;
//         }
//     }
//     return letterCount;
// }
// document.write("Occurrence of letter: " + charCount('JSResourceS.com', 'o'));

// // Task 14
// var radiusOfCircle = +prompt("Enter radius of circle to find it's circumference and area");

// function calcCircumference(radiusOfCircle) {
//     var circumference = 2 * 3.142 * radiusOfCircle;
//     document.write("The circumference is: " + circumference + "<br>   ");
//     return circumference;
// }

// function calcArea(radiusOfCircle) {
//     var area = 3.142 * radiusOfCircle * radiusOfCircle;
//     document.write("The area is: " + area + "<br>   ");
//     return circumference;
// }
// calcCircumference(radiusOfCircle);
// calcArea(radiusOfCircle);