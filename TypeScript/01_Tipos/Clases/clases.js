"use strict";
class Avenger {
    constructor(name, team, realName) {
        this.name = name;
        this.team = team;
        this.realName = realName;
    }
    bio() {
        return `${this.name} - ${this.team}`;
    }
    ;
    static fromObject({ name, team, realName }) {
        return new Avenger(name, team, realName);
    }
    ;
}
Avenger.publisher = 'Marvel';
;
const ironMan = new Avenger('Iron Man', 'Iron Man');
const hulk = new Avenger('Hulk', 'No team', 'Bruce Banner');
const wanda = Avenger.fromObject({ name: 'Scarlet Witch', team: 'Captain America' });
const captainAmerica = Avenger.fromObject({ name: 'Captain America', team: 'Captain America', realName: 'Steve Rodgers' });
console.log(Avenger.publisher);
console.log(ironMan);
console.log(ironMan.bio());
console.log(hulk);
console.log(hulk.bio());
console.log(wanda);
console.log(wanda.bio());
console.log(captainAmerica);
console.log(captainAmerica.bio());
class Person {
    constructor(name, age, active) {
        this.name = name;
        this.age = age;
        this.active = active;
    }
    ;
    get getName() {
        return this.name;
    }
    getStatus() {
        return `${this.name} is ${this.age} years old and is currently ${(this.active) ? 'active' : 'inactive'}`;
    }
}
class Student extends Person {
    constructor(name, age, school) {
        super(name, age, true);
        this.school = school;
    }
    set setSchool(school) {
        this.school = school;
    }
    getStatus() {
        return `${super.getStatus()} and study in ${this.school}`;
    }
}
const student1 = new Student('Yael', 23, 'IPN');
const student2 = new Student('Joshua', 21, 'UNAM');
console.log(student1);
student1.setSchool = 'UNAM';
console.log(student1.getStatus());
console.log(student1.getName);
console.log(student2);
console.log(student2.getStatus());
//# sourceMappingURL=clases.js.map