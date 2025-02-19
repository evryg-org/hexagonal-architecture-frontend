import { Burger } from "../../domain/burger";
import { BurgerOrder } from "../../domain/burger_order";


export interface OrderBurgerUseCase {
  orderBurger(burgerOrder: BurgerOrder): Promise<Burger>;
}
