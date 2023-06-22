import { Person } from '../interfaces/Person';
import { User } from '../interfaces/User';

export class Teacher<X, Y extends Person> implements User<X, Y>{
  constructor(
    public id: X,
    public user: Y
  ) { }

  getName(): string {
    return `${this.id} - ${this.user.name} - ${this.user.age} years`;
  }
};