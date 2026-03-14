// Grade System

const marks = 95;

function gradeSystem(marks) {
  if (marks >= 85) {
    console.log("Grade A");
  } else if (marks >= 70) {
    console.log("Grade B");
  } else if (marks >= 50) {
    console.log("Grade C");
  } else {
    console.log("fail");
  }
}
gradeSystem(marks);
gradeSystem(75);
gradeSystem(66);
gradeSystem(20);
