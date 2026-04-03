// 1.Arrays Loop

// const input = [1, 2, 3, 4, 5, 7,7];
// for (let i = 0; i < input.length; i++) {
//   console.log(input[i]);

// }
// console.log(input.length, "length");

// const half = input.length / 2
// const halfOdd = Math.floor(input.length / 2);

// console.log(half, "half");
// console.log(halfOdd, "half");

// 2.ARRAY WITH ascending order and descending with using sort

const arr1 = [5, 20, 30, 1, 3, 4, 6];
const sortarr1 = arr1.sort((ascending, descending) => ascending - descending);

const arr2 = [17, 163, 14, 71, 18, 1];

const sortarr2 = arr2.sort((ascending, descending) => descending - ascending);

// console.log(sortarr1);
// console.log(sortarr2);

// 3. Reverse an array

const beforReverse = [1, 2, 3, 4, 5];

function ReverseArray(beforReverse) {
  let reverseArray = [];
  for (let i = beforReverse.length - 1; i >= 0; i--) {
    reverseArray.push(beforReverse[i]);
  }
  return reverseArray;
}

// console.log(ReverseArray(beforReverse));

