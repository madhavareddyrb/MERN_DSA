// Find the Largest of Three Numbers

const num1 = 10;
const num2 = 20;
const num3 = 0;

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

findLargestNumber(10,20,40)