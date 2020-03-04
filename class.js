class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        //common or shared property
        this.team = "BD Cricket Team";
    }
}

const student1 = new Student(7, "Tamim Iqbal");
const student2 = new Student(10, "Imrul Kayes");
console.log(student1.name, student2.name);