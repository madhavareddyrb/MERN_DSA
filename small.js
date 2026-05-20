// Find the smallest element in an array

// 1. array = [12,5,6,7,2]

// loop use chestham
// 1. take an array

// 2. loop that Array
// 3. tak e an variable to store small
// 4. we compare both values with small variable and if we find small number we change value or else we continue loop

const arr = [12,5,6,7,5]
let smallest = arr[0]

for (let i = 1; i <= arr.length; i++){
  if(arr[i] > smallest){
    smallest = arr[i]
  }
}

console.log(smallest)

// take

// 12 < 5 true so smallest = 5
// 6 < 5 false
// 7 < 5 false
// 5 < 5 false

