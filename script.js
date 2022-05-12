
// class Student {
//     constructor(name, mark){
//       this.studentName = name;
//         this.studentMarks = mark
//     }
   
// }


// class Group {
//     constructor(){
//         this.students = [];  
//     }
//     addStudent(student){
//         return this.students.push(student)
//     }
//     getAverageMark(){ 
//          let studentNotes =  this.students.map((e) => {
//             return e.studentMarks.reduce((acc, el) => {
//                 return(acc += el)
//             },0) /  e.studentMarks.length
//             })

//             return studentNotes.reduce((acc, el) =>{
//                 return acc+=el
//              },0) / studentNotes.length
//     }
// }
          

// const feGroup = new Group();
// const firstStudent = new Student('John Doe', [10, 102, 0]);

// feGroup.addStudent(new Student('Alex Smith', [10, 9, 8]));
// feGroup.addStudent( new Student('John Doe', [10, 10, 5, 10]));
// feGroup.addStudent(new Student('Bob Johnson', [9, 10, 10, 8]));

// console.log(feGroup.students);

// const averageMark = feGroup.getAverageMark()

// console.log(averageMark);


const stu = [
    {
      marks: [1, 2, 3,4,5],
    },
    {
      marks: [1, 2, 3],
    },
  ];
  
  const averageM =
    stu.reduce(
      (acc, st) =>
        (acc += st.marks.reduce((a, m) => (a += m), 0) / st.marks.length),
      0
    ) / stu.length;
  
    // console.log(averageM)


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
                // return e.studentMarks.reduce((acc, el) => {
                //     return(acc += el)
                // },0) /  e.studentMarks.length
                // })
    
                // return studentNotes.reduce((acc, el) =>{
                //     return acc+=el
                //  },0) / studentNotes.length
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
    


