export interface SesameBun {
  type: string;
}

export interface BeefPatty {
  type: string;
}

export interface Cheddar {
  type: string;
}

export interface Lettuce {
  type: string;
}

export interface Burger {
  bun: SesameBun;
  patty: BeefPatty;
  topping: Lettuce;
  cheese: Cheddar;
}
