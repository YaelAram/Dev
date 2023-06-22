interface Power {
  id: number;
  name: string;
};

const powers: Power[] = [
  { id: 1, name: 'Fly' },
  { id: 2, name: 'Fire' }
];

export const createPower = (power: Power): boolean => {
  powers.push(power);
  return true;
};

export default powers;
