// Homework 5

let grade = Number(prompt(`How much points did you get on avarage`));

if (grade === 100){
    console.log(`Your adducation has been fully financed!(Are you asian by any chance)`);
} else if (70 > grade < 100){
    console.log(`Your adducation has been fincanced with 3000 Lari!`);
} else if (40 > grade < 70){
    console.log(`Your adducation has been fincanced with 1000 Lari!(Idk how are you this bad but here you go)`)
} else {
    console.log(`Your adducation has not been financed.(How can you be this bad💀)`)
}