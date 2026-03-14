// Positive or Negtaive Or Zero

// const input = "10";
function positiveOrNegative(input) {
  if (input > 0) {
    console.log("Even Number");
  } else if (input < 0) {
    console.log("Negative Number");
  } else {
    console.log("zero");
  }
}

// positiveOrNegative(input);

// even or Odd Numbers if input % 2 === 0 (even) and input % 2 === 1 (odd)

// const input = 99;
function evenOrOdd(input) {
  if (input % 2 === 0) {
    console.log(`${input} is Even Number`);
  } else {
    console.log(`${input} is odd number`);
  }
}
evenOrOdd(input);

// Check if  num is divisble by 5 or not

// const input = 10;
const divisbleby = 5;
function divisbleOfinput(input, divisbleby) {
  if (input % divisbleby === 0) {
    console.log(`${input} is divible by ${divisbleby}`);
  } else {
    console.log(`${input} is not divible by ${divisbleby}`);
  }
}
divisbleOfinput(input, divisbleby);

// Divisble by 2 numbers

// const input = 13;
const diviblebynum1 = 3;
const diviblebynum2 = 5;

function divisbleByTwoNumbers(input, diviblebynum1, diviblebynum2) {
  if (input % diviblebynum1 === 0 && input % diviblebynum2 === 0) {
    console.log(
      `${input} is divisble by ${diviblebynum1} and ${diviblebynum2}`,
    );
  } else if (input % diviblebynum1 === 0 || input % diviblebynum2 === 0) {
    console.log(`${input} is divisble by ${diviblebynum1} or ${diviblebynum2}`);
  } else {
    console.log(
      `${input} is not divisble by ${diviblebynum1} and ${diviblebynum2}`,
    );
  }
}

divisbleByTwoNumbers(input, diviblebynum1, diviblebynum2);

//Find the Larger of Two Numbers

const num1 = 10;
const num2 = 2;

function largestNumber(num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`);
  } else {
    console.log(`${num2} is greater than ${num1}`);
  }
}

largestNumber(num1, num2);
largestNumber(20, 30);
largestNumber(2, 4);

// Find the Largest of Three Numbers

// const num1 = 10;
// const num2 = 20;
// const num3 = 0;

function findLargestNumber(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    console.log(`${num1} is greater than ${num2} and ${num3}`);
  } else if (num2 > num1 && num2 > num3) {
    console.log(`${num2} is greater than ${num1} and ${num3}`);
  } else if (
    (num1 === num2 && num1 === num3,
    num2 === num1 && num2 === num3,
    num3 === num1 && num3 === num2)
  ) {
    console.log(`${num1}, ${num2} and ${num3} are equal`);
  } else {
    console.log(`${num3} is greater than ${num1} and ${num2}`);
  }
}

findLargestNumber(num1, num2, num3);

findLargestNumber(10, 10, 10);

findLargestNumber(10, 20, 40);

// Temperature Category

const tempValue = 10;

function checkTemp(tempValue) {
  if (tempValue <= 15) {
    console.log("Cold");
  } else if (tempValue > 15 && tempValue <= 25) {
    console.log("Warm");
  } else {
    console.log("Hot");
  }
}

checkTemp(tempValue);

checkTemp(20);

checkTemp(40);

// Grade System

const marks = 95;

function gradeSystem(marks) {
  if (marks >= 85) {
    console.log("Grade A");
  } else if (marks >= 70) {
    console.log("Grade B");
  } else if (marks >= 50) {
    console.log("Grade C");
  } else {
    console.log("fail");
  }
}
gradeSystem(marks);
gradeSystem(75);
gradeSystem(66);
gradeSystem(20);

// check both numbers, even or odd or mixed

const a = 10;
const b = 18;

function checkNumbers(a, b) {
  if (a % 2 === 0 && b % 2 === 0) {
    console.log(`${a} and ${b} both are even`);
  } else if (a % 2 === 1 && b % 2 === 1) {
    console.log(`${a} and ${b} both are odd`);
  } else {
    console.log(`${a} and ${b} are mixed`);
  }
}

checkNumbers(a, b);

checkNumbers(11, 15);

checkNumbers(10, 9);

// Determine Time of the Day

const input = 1;

function timeOfDay(input) {
  if (input > 24) {
    console.log("Please select time from 0 to 24 hours format");
  } else if (input > 0 && input <= 12) {
    console.log("Morning");
  } else if (input >= 13 && input <= 16) {
    console.log("AfterNoon");
  } else if (input >= 17 && input <= 19) {
    console.log("evening");
  } else {
    console.log("Good Night Bro");
  }
}

timeOfDay(input);

timeOfDay(13);

timeOfDay(17);
timeOfDay(20);
