// task-1

let firstName = "Ajayi";
const lastName = "Oluwafisayo";
let age = 22;
const studentId = "STU-00456";
const gpa = 3.85;
let isEnrolled = true;
let graduationDate = null;

console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("Age:", age);
console.log("Student ID:", studentId);
console.log("GPA:", gpa);
console.log("Is Enrolled:", isEnrolled);
console.log("Graduation Date:", graduationDate);

firstName = "Joseph";

console.log("Updated First Name:", firstName);

// Task 2 — Operators

let totalScore = 0;
console.log("Initial totalScore:", totalScore);

// Student scores 45 in their first test — add it
totalScore += 45;
console.log("After first test (+45):", totalScore);

// Student scores 30 in their second test — add it
totalScore += 30;
console.log("After second test (+30):", totalScore);

// Deduct 5 marks due to an error
totalScore -= 5;
console.log("After deduction (-5):", totalScore);

// The score is doubled for a bonus round
totalScore *= 2;
console.log("After bonus round (doubled):", totalScore);

// Add 1 point using the increment operator
totalScore++;
console.log("After increment (+1):", totalScore);

// At the end, log the remainder when totalScore is divided by 7
let remainder = totalScore % 7;
console.log("Remainder when divided by 7:", remainder);

// Task 3 — Type Conversion

let studentAge = "19";
let examScore = "74.5";
let passMark = "50";
let studentName = 101;

let convertedAge = parseInt(studentAge);

let convertedExamScore = parseFloat(examScore);

let convertedPassMark = Number(passMark);

let convertedStudentName = String(studentName);

console.log("Type:", typeof convertedAge, "| Value:", convertedAge);
console.log("Type:", typeof convertedExamScore, "| Value:", convertedExamScore);
console.log("Type:", typeof convertedPassMark, "| Value:", convertedPassMark);
console.log(
  "Type:",
  typeof convertedStudentName,
  "| Value:",
  convertedStudentName,
);

let isPassed = convertedExamScore > convertedPassMark;
console.log("Is exam score greater than pass mark?", isPassed);

// Task 4

// Test Run 1
let score1 = 73;
let grade1 = "";

if (score1 >= 70) {
  grade1 = "A — Distinction";
} else if (score1 >= 60) {
  grade1 = "B — Merit";
} else if (score1 >= 50) {
  grade1 = "C — Pass";
} else if (score1 >= 40) {
  grade1 = "D — Near Pass";
} else {
  grade1 = "F — Fail";
}
console.log(`Score: ${score1} | Grade: ${grade1}`);

/*
// Test Run 2
let score2 = 65;
let grade2 = "";

if (score2 >= 70) {
    grade2 = "A — Distinction";
} else if (score2 >= 60) {
    grade2 = "B — Merit";
} else if (score2 >= 50) {
    grade2 = "C — Pass";
} else if (score2 >= 40) {
    grade2 = "D — Near Pass";
} else {
    grade2 = "F — Fail";
}
console.log(`Score: ${score2} | Grade: ${grade2}`);
*/

/*
// Test Run 3
let score3 = 35;
let grade3 = "";

if (score3 >= 70) {
    grade3 = "A — Distinction";
} else if (score3 >= 60) {
    grade3 = "B — Merit";
} else if (score3 >= 50) {
    grade3 = "C — Pass";
} else if (score3 >= 40) {
    grade3 = "D — Near Pass";
} else {
    grade3 = "F — Fail";
}
console.log(`Score: ${score3} | Grade: ${grade3}`);
*/
