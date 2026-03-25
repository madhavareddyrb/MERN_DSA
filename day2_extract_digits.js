// 1. OTP DIGIT SUM  n = (482)

const otp = 482;
let sum = 0;
const lastDigit = otp % 10;
const middleDigit = Math.floor((otp / 10) % 10);
const firstDigit = Math.floor(otp / 100);

// console.log(firstDigit);
// console.log(middleDigit);
// console.log(lastDigit);

sum = firstDigit + middleDigit + lastDigit;
// console.log(sum);

// 2. Pincode Dark Store Routing if firstDigit === 5 (store A) or fD===6(store B) or any else

const findStore = 650;

function findWhichStore(findStore) {
  const firstdigit = Math.floor(findStore / 100);
  if (firstdigit === 5) {
    console.log("Store A");
  } else if (firstdigit === 6) {
    console.log("Store B");
  } else {
    console.log("Anything Else");
  }
}

// findWhichStore(findStore);

// 3. check OTP all digits distinct

const otpNum = 855;

function checkDistinct(otpNum) {
  const firstNumDigit = Math.floor(otpNum / 100);
  const middleNumDigit = Math.floor((otpNum / 10) % 10);
  const lastNumDigit = otpNum % 10;

  if (
    firstNumDigit != middleNumDigit &&
    firstNumDigit != lastNumDigit &&
    middleNumDigit != lastNumDigit
  ) {
    console.log("Otp digits all are distinct");
  } else {
    console.log("OTP digits are not all distinct");
  }
}

// checkDistinct(otpNum);

// 4.delivery slot hour and minute with am and PM

const deliveryTime = 1630;
function displayDeliveryTime(deliveryTime) {
  const lastTwoDigitsMinute = deliveryTime % 100;
  const firstTwoDigitsHour = Math.floor(deliveryTime / 100);
  if (firstTwoDigitsHour <= 11) {
    console.log(
      `delivery time is ${firstTwoDigitsHour}:${lastTwoDigitsMinute} AM`,
    );
  } else {
    console.log(
      `delivery time is ${firstTwoDigitsHour}:${lastTwoDigitsMinute} PM`,
    );
  }
}

displayDeliveryTime(deliveryTime);

// 5.
