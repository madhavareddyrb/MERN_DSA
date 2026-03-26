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
    count += 1
  }
  console.log(count);
  
}
countDigits(numberDigit);
