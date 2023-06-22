(() => {
  /*
    Las interfaces y types son muy similares y en la mayoria de los casos pueden ser usadas indistintamente,
    sin embargo, las interfaces pueden ser expandidas (atributos o metodos) de forma mas sencilla que un type
    ademas de ser usadas para modelar la respuesta de una peticion HTTP

    El tipo Address es una interfaz adicional, la interfaz principal (Hero) suele ser la primera en definirse
    y estar al en la parte superior del codigo, las interfaces secundarias estan inmediatamente debajo de esta
  */
  interface Hero {
    name: string;
    age?: number;
    powers: string[];
    address?: Address;
    getPowers?: () => string[];
  };

  interface Alien extends Hero {
    planet: string;
  };

  interface Address {
    id: number;
    city: string;
    getCity(id: number): string;
  };

  const flash: Hero = {
    name: 'Barry Allen',
    age: 24,
    powers: ['Time travel', 'Super strenght']
  };
  console.log(flash);

  const superman: Hero = {
    name: 'Super Man',
    powers: ['Super Strenght', "Fly"],
    address: {
      id: 1,
      city: 'Metropolis',
      getCity() {
        return `The id is ${this.id} for ${this.city}`;
      },
    },
    getPowers() {
      return this.powers;
    }
  };
  console.log(superman);
  console.log(superman.address?.getCity(1));

  const groot: Alien = {
    name: 'Goot',
    powers: ['He can grow his arms'],
    planet: 'Mars'
  };
  console.log(groot);
})();
