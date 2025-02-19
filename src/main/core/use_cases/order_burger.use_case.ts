import { OrderBurgerUseCase } from "../ports/primary/order_burger.port";
import { BurgerRepository } from "../ports/secondary/burger_repository.port";

export const makeOrderBurgerUseCase = (
  burgerRepository: BurgerRepository
): OrderBurgerUseCase => {
  return {
    orderBurger(burgerOrder) {
      return burgerRepository.orderBurger(burgerOrder);
    },
  };
};
