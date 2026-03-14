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
