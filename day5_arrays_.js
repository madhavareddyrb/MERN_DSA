// 1.Second Largest and Second Smallest values

const array = [10, -1, 3, 40, 22, 1, 66, 1, 66, -1];
function findSecondsLargestSmallestNum(array) {
  let smallest = Infinity;
  let secondSmallest = smallest;

  let largest = -Infinity;
  let secondLargest = largest;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < smallest) {
      secondSmallest = smallest;
      smallest = array[i];
    } else if (secondSmallest > array[i] && array[i] !== smallest) {
      secondSmallest = array[i];
    }

    if (array[i] > largest) {
      secondLargest = largest;
      largest = array[i];
    } else if (secondLargest < array[i] && array[i] !== largest) {
      secondLargest = array[i];
    }
  }

  console.log(smallest, "smallest");
  console.log(secondSmallest, "secondSmalest");
  console.log(largest, "largest");
  console.log(secondLargest, "secondLargest");
}
findSecondsLargestSmallestNum(array);
