class student
{
    constructor(firstname1,lastname1,rollno1)
    {

this.firstname =firstname1;
this.lastname =lastname1;
this.rollno =rollno1;

}
enroll()
{
    console.log(`this student ${this.firstname} ${this.lastname} with rollno: `)
}
}
let student1 = new student('prakash','deepak',7373)
 student1.enroll()
