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

// displayDeliveryTime(deliveryTime);

// 5. Price Rupess and Pieces

const price = 1630;
function CheckPrice(price) {
  const lastTwoDigitsPieces = deliveryTime % 100;
  const firstTwoDigitsRupees = Math.floor(deliveryTime / 100);
  // console.log(firstTwoDigitsRupees);

  // console.log(lastTwoDigitsPieces);
  console.log(`Rupess ${firstTwoDigitsRupees}.${lastTwoDigitsPieces}`);
}

// CheckPrice(price);

// 6. Round Price for Display

const roundPrice = 4567;

function CheckRoundPrice(roundPrice) {
  const priceTag = Math.floor(roundPrice / 100);
  const paiseTag = roundPrice % 100;
  console.log(`Price:${priceTag} paise: ${paiseTag}`);
}
// CheckRoundPrice(roundPrice);

// 7.Check Order ID priority queue depends on middle num

const OrderId = 376;
function checkOrderPriority() {
  const middleId = Math.floor((OrderId / 10) % 10);
  const LastId = OrderId % 10;
  const firstId = Math.floor(OrderId / 100);
  if (middleId > LastId && middleId > firstId) {
    console.log(`First Priority`);
  } else {
    console.log(`Second Priority`);
  }
}

// checkOrderPriority(OrderId);

// 8.Coupon code discount based on last digit

const basePrice = 485;
function checkDiscount(basePrice) {
  const basePriceLastDigit = basePrice % 10;
  if (basePriceLastDigit <= 3) {
    console.log(`10% discount`);
  } else if (basePriceLastDigit <= 6) {
    console.log(`20% discount`);
  } else {
    console.log(`Free Delivery`);
  }
}
// checkDiscount(basePrice);

// 9. Check Palindrome Number

const palindromeNumber = 545;
function checkPalindromeNumber(palindromeNumber) {
  const lastNumber = String(palindromeNumber % 10);
  const middleNumber = String(Math.floor((palindromeNumber / 10) % 10));
  const firstNumber = String(Math.floor(palindromeNumber / 100));
  const checkPalindromeNum = lastNumber + middleNumber + firstNumber;
  if (String(palindromeNumber) === checkPalindromeNum) {
    console.log("Palindrome Number");
  }
  // console.log(checkPalindromeNum);
  // if (lastNumber === firstNumber) {
  //   console.log("Palindrome Number");
  // }
  else {
    console.log("Not a Palindrome Number");
  }
}

// checkPalindromeNumber(palindromeNumber);

// 10. Count Even Digits in number

const countEvenNum = 481;

let count = 0;
function checkEvenCount(countEvenNum) {
  const lastNum = countEvenNum % 10;
  const middleNum = Math.floor((countEvenNum / 10) % 10);
  const firstNum = Math.floor(countEvenNum / 100);
  console.log(lastNum, middleNum, firstNum);

  if (middleNum % 2 === 0 && lastNum % 2 === 0 && firstNum % 2 === 0) {
    count += 3;
    console.log("Batch is Eligiable");
  } else {
    console.log("Batch is not eligiable");
  }
}

checkEvenCount(countEvenNum);
