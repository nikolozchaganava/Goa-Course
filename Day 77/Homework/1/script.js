//Class work 1

let gradeFirst = Number(prompt("What grade did you get for the intermediate course?"));
let gradeSecond = Number(prompt("What is your final grade?"));
let gradeThird = Number(prompt("What grade did you get for the project?"));

function canStudentPass(gradeFirst, gradeSecond, gradeThird) {
    if (isNaN(gradeFirst) || isNaN(gradeSecond) || isNaN(gradeThird) ||
        gradeFirst < 0 || gradeFirst > 100 ||
        gradeSecond < 0 || gradeSecond > 100 ||
        gradeThird < 0 || gradeThird > 100) {
        return "Please enter valid grades between 0 and 100.";
    }

    let average = (gradeFirst * 0.2) + (gradeSecond * 0.4) + (gradeThird * 0.4);

    if (average >= 70) {
        return `You passed! Your average score is ${average.toFixed(2)}.`;
    } else {
        return `You failed! Your average score is ${average.toFixed(2)}.`;
    }
}

console.log(canStudentPass(gradeFirst, gradeSecond, gradeThird));