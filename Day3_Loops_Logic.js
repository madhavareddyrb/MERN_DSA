// Section 1: Loop & Logic Building

// 1. Print Numbers from 1 o n

const n = 10;
function displayUptoN(n) {
  for (i = 1; i <= n; i++) {
    console.log(i);
  }
}
// displayUptoN(n);
// displayUptoN(11)

// 2. Print Number from N to 1

const num = 10;
function displayNtoOne(num) {
  for (i = num; i > 0; i--) {
    console.log(i);
  }
}
// displayNtoOne(num);

// 3. Sum of First N Natural Numbers

const sumNums = 5;
let sum = 0;

function sumFirstNNaturalNums(sumNums) {
  for (i = 1; i <= sumNums; i++) {
    sum += i;
  }
  console.log(sum);
}
// sumFirstNNaturalNums(sumNums)

// 4. Count Even and Odd Numbers from 1 to N

const N = 9;

function CountEvenAndOddNumbers(N) {
  let evenCount = 0;
  let oddCount = 0;
  for (i = 1; i <= N; i++) {
    if (i % 2 === 0) {
      evenCount += 1;
    } else {
      oddCount += 1;
    }
  }
  console.log(`Even Count: ${evenCount}`);
  console.log(`Odd Count: ${oddCount}`);
}
// CountEvenAndOddNumbers(N);
// CountEvenAndOddNumbers(45);

// 5. Sum of Even  Numbers Only form 1 to N

const evenNumOnly = 6;
function evenNumsSum(evenNumOnly) {
  let sumofEvenNumbers = 0;
  for (i = 1; i <= evenNumOnly; i++) {
    if (i % 2 == 0) {
      sumofEvenNumbers += i;
    }
  }
  console.log(sumofEvenNumbers);
}
// evenNumsSum(evenNumOnly);
// evenNumsSum(10);

// 6. Multiplication Table

const ntable = 2;

function MultiplicationTable() {
  for (i = 1; i <= 10; i++) {
    console.log(`${ntable} X ${i} = ${ntable * i}`);
    // console.log(`${ntable} + ${i} = ${ntable + i}`);
  }
}

// MultiplicationTable(ntable);

let nna = 1244;

// console.log(length(nna));
// console.log(nna.length());

// 7.Reverse a Number

const number = 1234;
function reverseNumber(n) {
  let reverseNum = 0;
  while (n > 0) {
    const lastDigit = n % 10;
    reverseNum = 10 * reverseNum + lastDigit;
    n = Math.floor(n / 10);
  }
  console.log(reverseNum);
  return reverseNum;
}
// reverseNumber(number);

// 8. check palindrome Number

const palindromeNum = 122;
function checkPalindrome(n) {
  // console.log(n, "before n / 10");
  let reverseNumber = 0;
  while (n > 0) {
    const lastDigit = n % 10;
    reverseNumber = 10 * reverseNumber + lastDigit;
    n = Math.floor(n / 10);
  }
  if (reverseNumber === palindromeNum) {
    console.log(`${palindromeNum} is Palindrome Number`);
  } else {
    console.log(`${palindromeNum} is not a Palindrome Number`);
  }
}

// checkPalindrome(palindromeNum);

// 9. Find Largest Element Number in array

const arr = [3, 7, 2, 9, 10];
// console.log(arr.length)
let largestNum = arr[0];
function findLargestNum(arr) {
  for (i = 0; i <= arr.length; i++) {
    for (j = 0; j <= arr.length; j++) {
      if (arr[j] > largestNum) {
        // console.log(arr[j]);
        largestNum = arr[j];
      }
    }
  }
  console.log(largestNum);
}
// findLargestNum(arr);

// 10. Count Digits in a Number

const numberDigit = 3578;
let count = 0;
function countDigits(n) {
  while (n > 0) {
    // const lastNumDigit = n % 10
    n = Math.floor(n / 10);
    count += 1;
  }
  console.log(count);
}
// countDigits(numberDigit);

// SECTION 2 — MAKEMYTRIP REAL-WORLD PROBLEMS

// 1. Booking ID palindrome or not

const bookingId = 123;
function checkBookingId(n) {
  let reverseId = 0;
  while (n > 0) {
    const lastDigitId = n % 10;
    reverseId = 10 * reverseId + lastDigitId;
    n = Math.floor(n / 10);
    // console.log(reverseId);
  }
  // console.log(reverseId);

  if (reverseId === bookingId) {
    console.log("valid");
  } else {
    console.log(`Not Valid`);
  }
}
// checkBookingId(bookingId);

// 2. Price Breakdown (Rupees & Paise)
const Price = 4567;

function CheckRoundPrice(Price) {
  const priceTag = Math.floor(Price / 100);
  const paiseTag = Price % 100;
  console.log(`Price: rupees: ${priceTag} paise: ${paiseTag}`);
}
// CheckRoundPrice(Price);

//3. Discount System
const basePrice = 485;
function checkDiscount(basePrice) {
  const basePriceLastDigit = basePrice % 10;
  if (basePriceLastDigit <= 3) {
    console.log(`10% discount`);
  } else if (basePriceLastDigit <= 6) {
    console.log(`20% discount`);
  } else {
    console.log(`30%`);
  }
}
// checkDiscount(basePrice);

// 4?

//5. Ticket Analysis
const noOfTicketsBooked = 10;
function checkCountEvenOddTickets(noOfTicketsBooked) {
  let evenTicketsCount = 0;
  let oddTicketsCount = 0;

  for (i = 1; i <= noOfTicketsBooked; i++) {
    if (i % 2 == 0) {
      evenTicketsCount += 1;
    } else {
      oddTicketsCount += 1;
    }
  }
  console.log(evenTicketsCount);
  console.log(oddTicketsCount);
}
// checkCountEvenOddTickets(noOfTicketsBooked);
// checkCountEvenOddTickets(13);

// 6. Flight Time Extraction
const time = 1430;
function timeExtraction(n) {
  const minuties = n % 100;
  const hours = Math.floor(n / 100);
  console.log(`${hours} Hours, ${minuties} minutes`);
}
// timeExtraction(time);
// timeExtraction(123);

// 7. Total Fare Calculation

const ticketPrices = [2000, 3000, 1000];
function checkTotalPrice(ticketPrices) {
  let sum = 0;
  for (i = 0; i < ticketPrices.length; i++) {
    sum += ticketPrices[i];
  }
  console.log(sum);
}
// checkTotalPrice(ticketPrices);

//8. Highest Ticket Price

const prices = [200, 300, 250, 400];
function highestPrice(prices) {
  let highestPrice = prices[0];
  for (i = 1; i < prices.length; i++) {
    if (highestPrice < prices[i]) {
      highestPrice = prices[i];
    }
  }
  console.log(highestPrice);
}
// highestPrice(prices)
// highestPrice([120,30,200])

// 9. Coupon code valid or not

const couponCode = 132;
function checkCouponCodeValid(couponCode) {
  const lastCounponDigit = couponCode % 10;
  const MiddleCounponDigit = Math.floor((couponCode / 10) % 10);
  const firstCounponDigit = Math.floor(couponCode / 100);
  if (
    firstCounponDigit != MiddleCounponDigit &&
    firstCounponDigit != lastCounponDigit &&
    MiddleCounponDigit != firstCounponDigit &&
    MiddleCounponDigit != lastCounponDigit
  ) {
    console.log(`${couponCode} is valid`);
  } else {
    console.log(`${couponCode} is not valid`);
  }
}
// checkCouponCodeValid(couponCode);
// checkCouponCodeValid(112);
// checkCouponCodeValid(122);
// checkCouponCodeValid(121);

// 10.Batch Booking Eligibility

const bookingbatch = 246;
function BatchEligibility(n) {
  // while (n > 0) {
  //   let last = n % 10;
  //   n = Math.floor(n / 10);
  //   if (last % 2 != 0) {
  //     console.log("Not eligiable");
  //   }else{
  //     console.log("Eligiable");
  //   }
  // }

  const last = n % 10;
  const middle = Math.floor((n / 10) % 10);
  const first = Math.floor(n / 100);
  if (last % 2 === 0 && middle % 2 === 0 && first % 2 === 0) {
    console.log("Batch Elibiable");
  } else {
    console.log("not eligiable");
  }
}
BatchEligibility(bookingbatch);
