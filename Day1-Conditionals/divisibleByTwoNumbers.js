// Divisble by 2 numbers

const input = 13;
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
