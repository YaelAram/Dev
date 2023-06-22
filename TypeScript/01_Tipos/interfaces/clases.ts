(() => {
  interface Human {
    name: string;
    lastName: string;
    age: number;
    fullName(): string;
  };

  interface ShowInfo {
    (student: Student): string;
  }

  class Student implements Human {
    constructor(
      private id: number,
      public name: string,
      public lastName: string,
      public age: number,
    ) { }

    get getId() {
      return this.id;
    }

    public fullName(): string {
      return `${this.name} ${this.lastName}`;
    }
  }

  const yael = new Student(1, 'Yael', 'Castillo', 23);
  console.log(yael);
  console.log(yael.fullName());

  const showInfo: ShowInfo = (student: Student) => {
    const { age } = student;
    return `${student.getId} - ${student.fullName()} is ${age} years old`;
  };

  console.log(showInfo(yael));
})();
