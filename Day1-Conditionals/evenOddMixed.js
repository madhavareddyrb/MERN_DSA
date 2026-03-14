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

checkNumbers(11,15)

checkNumbers(10,9)