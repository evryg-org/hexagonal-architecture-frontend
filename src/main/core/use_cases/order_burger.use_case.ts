import { OrderBurgerUseCase } from "../ports/primary/order_burger.port";

export const makeOrderBurgerUseCase = (): OrderBurgerUseCase => {
  return {
    orderBurger(burgerOrder) {
      return Promise.resolve({
        bun: "sesame",
        patty: "chicken",
        topping: "lettuce",
        cheese: "cheddar",
      });
    },
  };
};
