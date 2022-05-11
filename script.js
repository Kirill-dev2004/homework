class Student {
    constructor(name, mark){
      this.studentName = name;
        this.studentMarks = mark
    }
   
}


class Group {
    constructor(){
        this.students = []; 
    }
    addStudent(student){
        return this.students.push(student)
    }
    getAverageMark(){
        const marks = this.students.map((e) => {
            const mark = e;
          return  this.studentMarks.reduce((acc, mark) => (acc += mark),0) / studentMarks.length
            
        })


        // const marks = student.studentMarks
        // console.log(marks);


        // let sum = 0
        // let count = 0
        // for(let student of this.students){
        //     const marks = student.studentMarks
        //     console.log(marks)

        //     for(let mark of marks){
        //         sum += mark
        //         count++
        //     }           
        // }
        // return sum / count 
    }
}

const feGroup = new Group();
const firstStudent = new Student('John Doe', [10, 102, 0]);

feGroup.addStudent(new Student('Alex Smith', [10, 9, 8]));
feGroup.addStudent( new Student('John Doe', [10, 10, 5, 10]));
feGroup.addStudent(new Student('Bob Johnson', [9, 10, 10, 8]));

console.log(feGroup.students);

const averageMark = feGroup.getAverageMark()

console.log(averageMark);



