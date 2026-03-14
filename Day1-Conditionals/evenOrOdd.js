// even or Odd Numbers if input % 2 === 0 (even) and input % 2 === 1 (odd)

const input = 99;
function evenOrOdd(input) {
  if (input % 2 === 0) {
    console.log(`${input} is Even Number`);
  } else {
    console.log(`${input} is odd number`);
  }
}
evenOrOdd(input);
