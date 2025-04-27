 class Student{
  constructor(name,RollNo)
  {
    this.name = name;
   this.RollNo = RollNo;

  }
   fun(){
    console.log(`StudentName = ${this.name}, RollNo = ${this.RollNo}`);
 }
  static EcoRay(){
    console.log('EcoRay Institude of Technology');
  }

} 

let StudentOne = new Student("Osama",1)
let Studenttow = new Student("Huzaifa",2)
Student.EcoRay()
StudentOne.fun()
Studenttow.fun()

