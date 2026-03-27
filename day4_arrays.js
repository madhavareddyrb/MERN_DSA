// 1. Find The smallest number in arrays

const arr = [5, 1, 6, 7, 9, -1, 0, -2, -2];
// const arr = [];

function findSmallestNum(arr2) {
  if (arr.length === 0) {
    return null;
  }
  let smallestNum = arr[0];
  for (i = 1; i <= arr.length; i++) {
    if (arr[i] < smallestNum) {
      smallestNum = arr[i];
    }
  }
  return smallestNum;
}

// console.log(findSmallestNum());

// 2. Find the Largest Number in array

const largestArr = [2, 10, 2, 30, 40, 1, -10, 199];
// const largestArr = [];

function findLargestNum() {
  if (largestArr.length === 0) {
    return null;
  }
  let largestNum = largestArr[0];
  for (i = 1; i <= largestArr.length; i++) {
    if (largestArr[i] > largestNum) {
      largestNum = largestArr[i];
    }
  }
  return largestNum;
}

// console.log(findLargestNum());

// 3. find the sum of all elements

const elementArr = [10, 20, 3, 40, 50];

function findSumOfElements() {
  let sum = elementArr[0];
  for (i = 1; i < elementArr.length; i++) {
    sum += elementArr[i];
  }
  console.log(sum);

  return sum;
}

// console.log(findSumOfElements());

// 4. Find the average of elements

const averageArr = [1, 2, 3, 4];
function findAverage() {
  let sum = averageArr[0];
  for (i = 1; i < averageArr.length; i++) {
    sum += averageArr[i];
  }
  const averageNum = sum / 2;
  return averageNum;
}

// console.log(findAverage());

// 5. Count total elements of array

const countArr = [10, 20, 3, 4, 5, 8, 1];
function findCount() {
  let count = 0;
  for (i = 0; i < countArr.length; i++) {
    count++;
  }
  return count;
}
// console.log(findCount());

// 6. Count even numbers in array

const evenArr = [10, 2, 3, 4, 5, 7, 8]; // 3
function evenCount() {
  let evenCount = 0;
  for (i = 0; i < evenArr.length; i++) {
    if (evenArr[i] % 2 === 0) {
      evenCount++;
    }
  }
  return evenCount;
}
// console.log(evenCount());

//7. count odd numbers in array

const oddArr = [10, 2, 3, 4, 5, 7, 8, 9]; // 3
function oddCount() {
  let oddCount = 0;
  for (i = 0; i < oddArr.length; i++) {
    if (oddArr[i] % 2 === 1) {
      oddCount++;
    }
  }
  return oddCount;
}
// console.log(oddCount());

// 8. Sum of even elements

const evenSumArr = [10, 2, 3, 4, 5, 7, 8]; // 24
function evenSumElements() {
  let evenSumElement = 0;
  for (i = 0; i < evenSumArr.length; i++) {
    if (evenSumArr[i] % 2 === 0) {
      evenSumElement += evenSumArr[i];
    }
  }
  return evenSumElement;
}
// console.log(evenSumElements());

// 9. Sum of odd elements

const oddSumArr = [10, 2, 3, 4, 5, 7, 8, 9]; //
function oddSumElements() {
  let oddSum = 0;
  for (i = 0; i < oddSumArr.length; i++) {
    if (oddSumArr[i] % 2 === 1) {
      oddSum += oddSumArr[i];
    }
  }
  return oddSum;
}
// console.log(oddSumElements());

// 10. Difference between max(largest element) and min(smallest element)

const differenceArr = [5, 1, 6, 7, 9, ];

function differenceMaxMin(arr2) {
  if (differenceArr.length === 0) {
    return null;
  }
  let smallestEle = differenceArr[0];
  let highestEle = differenceArr[0];
  for (i = 1; i <= differenceArr.length; i++) {
    if (differenceArr[i] < smallestEle) {
      smallestEle = differenceArr[i];
    } else if (differenceArr[i] > highestEle) {
      highestEle = differenceArr[i];
    }
  }
  console.log(smallestEle);
  console.log(highestEle);

  return highestEle -(smallestEle);
}

console.log(differenceMaxMin());
