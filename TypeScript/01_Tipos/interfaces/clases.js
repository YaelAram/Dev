"use strict";
(() => {
    ;
    class Student {
        constructor(id, name, lastName, age) {
            this.id = id;
            this.name = name;
            this.lastName = lastName;
            this.age = age;
        }
        get getId() {
            return this.id;
        }
        fullName() {
            return `${this.name} ${this.lastName}`;
        }
    }
    const yael = new Student(1, 'Yael', 'Castillo', 23);
    console.log(yael);
    console.log(yael.fullName());
    const showInfo = (student) => {
        const { age } = student;
        return `${student.getId} - ${student.fullName()} is ${age} years old`;
    };
    console.log(showInfo(yael));
})();
//# sourceMappingURL=clases.js.map