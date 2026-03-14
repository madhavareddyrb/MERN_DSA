// Check if  num is divisble by 5 or not

const input = 10;
const divisbleby = 5;
function divisbleOfinput(input, divisbleby) {
  if (input % divisbleby === 0) {
    console.log(`${input} is divible by ${divisbleby}`);
  } else {
    console.log(`${input} is not divible by ${divisbleby}`);
  }
}
divisbleOfinput(input, divisbleby);
