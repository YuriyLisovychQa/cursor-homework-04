const STUDENTS = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const THEMES   = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const MARKS    = [4, 5, 5, 3, 4, 5];
const MAX_MARK = 5;
const MIN_MARK = 1;

const getPairs = (students) => {
    return [[students[0], students[3]], [students[1], students[2]], [students[4], students[5]]];
}

const aasignTaskToStudents = (students) => {
    return students.map(element => [element.join(" i "), THEMES[students.indexOf(element)]]);
}

const evaluetionStudents = (students) => {
    return students.map(student => [student, MARKS[students.indexOf(student)]]);
}

const evaluetionStudentsProjects = (students) => {
    return students.map(element => [...element, Math.floor(Math.random() * (MAX_MARK - MIN_MARK + 1)) + MIN_MARK]);
}

const groupStudentsData = () => {
    console.log(
        getPairs(STUDENTS),
        aasignTaskToStudents(getPairs(STUDENTS)),
        evaluetionStudents(STUDENTS),
        evaluetionStudentsProjects(aasignTaskToStudents(getPairs(STUDENTS))
    ));
}

groupStudentsData();