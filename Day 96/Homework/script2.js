//Task 3
//Create an object of the students, each one of them should have name and score values
const students = [
  { name: 'John Doe', score: 90 },
  { name: 'Badri Tyabladze', score: 85 },
  { name: 'Mike Tyson', score: 78 },
];

//Add new students arrays to the list of students
const newStudents = [
    { name: 'Gela Gogolauri', score: 92 },
    { name: 'Elon Musk', score: 88 }
  ];
  
students.push(...newStudents);

//Find student with the highest score in the list of students

const maxScoreStudent = students.reduce((max, student) => {
  if (student.score > max.score) {
    return student;
  }
  return max;
}, { name: '', score: 0 });