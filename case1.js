const peter = {
    name: "Peter",
    age: 50,
    students: [
        { name: "Andy", age: 20 },
        { name: "Bob", age: 23 },
        {
            name: "Charlie",
            age: 25,
            exercises: [{ score: 60, date: new Date("2019-01-05") }],
        },
    ],
};

// If you want to print the name and age of each students, you can run the following loop.
for (student of peter.students) {
    console.log(`student's name is: ${student.name} and age is ${student.age}`)
}

// If you want to print the exercises of each student, you can run the following loop.
for (let student of peter.students) {
    if (student.exercises) {
        for (let exercise of student.exercises) {
            console.log(`${student.name} : ${exercise.score}`)
        }
    }
}

/*
for (let student of peter.students) {
    if (student.name === "Bob") {
         return student.name
         console.log(student.name)
    }}
*/

let studentFound;
for (let student of peter.students) {
  if (student.name === "Andy") {
    studentFound = student;
  }
}

console.log(studentFound);



/*
function studentName(student) {
    for (let student of peter.students) {
        if (student.name === student)
        console.log(student)}
}

 console.log(studentName("Bob"));
*/

function findStudent(name) {
    let studentFound;
  
    for (let student of peter.students) {
      if (student.name === name) {
        studentFound = student;
      }
    }
    
    return studentFound;
  }
  
  console.log(findStudent("Andy"));
  findStudent("Bob");
  findStudent("Charlie");

function name(person) {
  
}