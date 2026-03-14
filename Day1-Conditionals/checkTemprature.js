// Temperature Category

const tempValue = 10;

function checkTemp(tempValue) {
  if (tempValue <= 15) {
    console.log("Cold");
  } else if (tempValue > 15 && tempValue <= 25) {
    console.log("Warm");
  } else {
    console.log("Hot");
  }
}

checkTemp(tempValue);

checkTemp(20);

checkTemp(40);
