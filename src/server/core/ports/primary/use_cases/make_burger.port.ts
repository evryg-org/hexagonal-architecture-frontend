interface Burger {}

export interface Kitchen {
  makeBurger(): Promise<Burger>;
}
