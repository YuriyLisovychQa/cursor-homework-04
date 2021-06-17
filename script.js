const STUDENTS = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const THEMES = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const MARKS = [4, 5, 5, 3, 4, 5];

const getPairs = (students) => {
    return [[students[0], students[3]], [students[1], students[2]], [students[4], students[5]]];
}

const aasignTaskToStudents = (students) => {
    let studentsTasks = [];

    for(let i = 0; i < students.length; i++) {
        studentsTasks.push([students[i].join(" і ")]);
        studentsTasks[i].push(THEMES[i]);
    }

    return studentsTasks;
}

const evaluetionStudents = (students) => {
    let studentsMarks = [];

    for(let i = 0; i < students.length; i++) {
        studentsMarks.push([students[i], MARKS[i]]);
    }

    return studentsMarks;
}

const getRandomMark = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const evaluetionStudentsProjects = (students) => {
    let studentsProjectMark = [];

    for(let i = 0; i < students.length; i++) {
        studentsProjectMark.push(students[i]);
        studentsProjectMark[i].push(getRandomMark(1, 5));
    }

    return studentsProjectMark;
}

const groupStudentsData = () => {
    let joinedStudentsByGender = getPairs(STUDENTS)
    let studentsWithAssignedTask = aasignTaskToStudents(joinedStudentsByGender)
    let studentEvaluetion = evaluetionStudents(STUDENTS)
    let evaluetionPerProject = evaluetionStudentsProjects(studentsWithAssignedTask)

    console.log(joinedStudentsByGender, studentsWithAssignedTask, studentEvaluetion, evaluetionPerProject);
}

groupStudentsData();