const STUDENTS = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const THEMES = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const MARKS = [4, 5, 5, 3, 4, 5];

const getPairs = (students) => {
    return [[students[0], students[3]], [students[1], students[2]], [students[4], students[5]]];
}


const joinStudentNames = (students) => {
    let kaka = [];
    for(let i = 0; i < students.length; i++) {
        kaka.push([students[i].join(" і ")]);
    }
    return kaka;
}

const asignTask = () => {
    let joinedStudents = joinStudentNames(getPairs(STUDENTS))
    for(let i = 0; i < joinedStudents.length; i++) {
        joinedStudents[i].push(THEMES[i]);
    }
    console.log(joinedStudents);
}

asignTask();


