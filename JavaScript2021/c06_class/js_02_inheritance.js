/*

pillar of Class
----

A
E
I
P

----

*/ 

class Person
{
    constructor(first, last, age, gender, interest)
    {
        this.name = { first, last };
        this.age = age;
        this.gender = gender;
        this.interest = interest;
    }

    greeting()
    { console.log(`hi i'm ${this.name.first}!`); }

    farewell()
    { console.log(`${this.name.first} has left the building. bye for now!`); }
}

class Teacher extends Person
{
    constructor(first, last, age, gender, interests, subject, grade)
    {
        super(first, last, age, gender, interests);
        this.subject = subject;
        this.grade = grade;
    }
}

let snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5);
snape.greeting();
snape.farewell();
