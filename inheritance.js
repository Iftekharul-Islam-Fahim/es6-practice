class Parent{
    constructor(){
        this.fatherName = "Hanks";
    }
}

class Child extends Parent{
    constructor(childName){
        //Must call super constructor in derived class before accessing 'this' 
        //or returning from derived constructor at new Child
        super();
        this.name = childName;
    }
    //method
    getFullName(){
            return this.name + " " +this.fatherName;
        }
}

const child1 = new Child("Tom");
const child2 = new Child("Jason");
console.log(child1.getFullName());
console.log(child2.getFullName());