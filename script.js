const STUDENTS = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const THEMES = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const MARKS = [4, 5, 5, 3, 4, 5];

const getPairs = (students) => {
    return [[students[0], students[3]], [students[1], students[2]], [students[4], students[5]]];
}


const joinStudentNames = (students) => {
    let studentsTasks = [];
    for(let i = 0; i < students.length; i++) {
        studentsTasks.push([students[i].join(" і ")]);
        studentsTasks[i].push(THEMES[i]);
    }
    return studentsTasks;
}
joinStudentNames(getPairs(STUDENTS));
console.log(joinStudentNames(getPairs(STUDENTS)))

const evaluetionStudents = (students) => {
    let studentsMarks = [];
    for(let i = 0; i < students.length; i++) {
        studentsMarks.push([students[i], MARKS[i]]);
    }
    return studentsMarks;
}
evaluetionStudents(STUDENTS);
console.log(evaluetionStudents(STUDENTS));