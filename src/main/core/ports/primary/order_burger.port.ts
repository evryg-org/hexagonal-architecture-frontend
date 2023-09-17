import { Burger } from "../../domain/burger";

interface BurgerOrder {
  bun: string;
  patty: string;
  topping: string;
  cheese: string;
}

export interface OrderBurgerUseCase {
  orderBurger(burgerOrder: BurgerOrder): Promise<Burger>;
}
