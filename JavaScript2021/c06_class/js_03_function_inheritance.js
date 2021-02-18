/*

JS < ECMAScript 2015 Classes

*/ 

function Person(firstName, lastName, age, gender, interest)
{
    this.name = { firstName, lastName };
    this.age = age;
    this.gender = gender;
    this.interest = interest;
}

Person.prototype.greet = function()
{ console.log(`Hi, i'm ${this.name.firstName}.`); }

var p = new Person("Zhang", "Liang", 35, "male", "money");
p.greet();

function Teacher(firstName, lastName, age, gender, interest, subject)
{
    Person.call(this, firstName, lastName, age, gender, interest);
    this.subject = subject;
}


// Teacher.greet(); // error out; greet is undefined...
// using the following line to fix; but problem emerges;
Teacher.prototype = Object.create(Person.prototype);
// usnig the following code to fix more;
Object.defineProperty(Teacher.prototype, 'constructor', {
    value: Teacher,
    enumerable: false, // so that it does not appear in 'for in' loop
    writable: true });

// overwrite methods
Teacher.prototype.greet = function() {
    let prefix;
    
    if (this.gender.toUpperCase() === 'MALE' || this.gender.toUpperCase() === 'M') {
        prefix = 'Mr.';
    } else if (this.gender.toUpperCase() === 'FEMALE' || this.gender.toUpperCase() === 'F') {
        prefix = 'Ms.';
    } else {
        prefix = 'Mx.';
    }
    
    console.log('Hello. My name is ' + prefix + ' ' + this.name.lastName + ', and I teach ' + this.subject + '.');
};

var t1 = new Teacher("S", "L", 35, "male", "money", "CS");
t1.greet();
// inherit from ctor w/o paramaters;

function Brick()
{
    this.width = 10;
    this.height = 20;
}

function BlueGlassBrick()
{
    Brick.call(this);
    this.opacity = .5;
    this.color = 'blue';
}