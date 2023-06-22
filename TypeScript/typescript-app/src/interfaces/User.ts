export interface User<T, U> {
  id: T;
  user: U;
  getName(): string;
};
