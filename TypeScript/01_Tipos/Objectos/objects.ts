/*
  Los tipos para un objeto pueden contener atributos opcionales
  Se define un TYPE para tener un tipo de dato personalizado, en este caso un tipo Hero
*/
type Hero = {
  name: string,
  age?: number,
  powers: string[],
  getPowers?: () => string[]
};

const flash: Hero = {
  name: 'Barry Allen',
  age: 24,
  powers: [ 'Time travel', 'Super strenght' ]
};
console.log( flash )

const superman: Hero = {
  name: 'Super Man',
  powers: [ 'Super Strenght', "Fly" ],
  getPowers(){
    return this.powers;
  }
};
console.log( superman );
