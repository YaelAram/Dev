type AvengerLike = {
  name: string;
  team: string;
  realName?: string;
};

/*
  Se utiliza la forma reducida del constructor usualmente ya que es igual de clara que la forma tradicional
  ademas de ser mas corta y permitir especificar el tipo de acceso al atributo
*/
class Avenger {
  // private name: string;
  // private team: string;
  // public realName?: string;
  static publisher: string = 'Marvel';

  constructor(
    private name: string,
    private team: string,
    public realName?: string
  ) { }

  public bio(): string {
    return `${this.name} - ${this.team}`;
  };

  /*
    Se define un Tipo de dato AvengerLike que contenga la misma especificacion que los atributos de la clase,
    se indica que el argumento de la funcion estatica sera del tipo AvengerLike y con la desestructuracion de objetos
    podemos acceder a las propiedades individuales de la funcion
  */
  static fromObject({ name, team, realName }: AvengerLike): Avenger {
    return new Avenger(name, team, realName);
  };
};

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

// Herencia
class Person {
  constructor(
    private name: string,
    private age: number,
    private active: boolean
  ) { };

  get getName(): string {
    return this.name;
  }

  protected getStatus(): string {
    return `${this.name} is ${this.age} years old and is currently ${(this.active) ? 'active' : 'inactive'}`;
  }
}

class Student extends Person {
  constructor(
    name: string,
    age: number,
    private school: string
  ) {
    super(name, age, true);
  }

  set setSchool(school: string) {
    this.school = school;
  }

  public getStatus(): string {
    return `${super.getStatus()} and study in ${this.school}`;
  }
}

const student1: Student = new Student('Yael', 23, 'IPN');
const student2: Student = new Student('Joshua', 21, 'UNAM');
console.log(student1);
student1.setSchool = 'UNAM';
console.log(student1.getStatus());
console.log(student1.getName)
console.log(student2);
console.log(student2.getStatus());
