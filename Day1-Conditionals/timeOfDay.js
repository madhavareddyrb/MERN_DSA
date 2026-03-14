// Determine Time of the Day

const input = 1;

function timeOfDay(input) {
  if (input > 24) {
    console.log("Please select time from 0 to 24 hours format");
  } else if (input > 0 && input <= 12) {
    console.log("Morning");
  } else if (input >= 13 && input <= 16) {
    console.log("AfterNoon");
  } else if (input >= 17 && input <= 19) {
    console.log("evening");
  } else {
    console.log("Good Night Bro");
  }
}

timeOfDay(input);

timeOfDay(13);

timeOfDay(17);
timeOfDay(20);
