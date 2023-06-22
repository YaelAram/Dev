export class Hero {
  constructor(
    private name: string,
    private powerId: number,
    private age: number
  ) { }

  describe(): string {
    return `${this.name}, ${this.age} years old, power id ${this.powerId}`;
  }

  get getPowerId(): number {
    return this.powerId;
  }
};
