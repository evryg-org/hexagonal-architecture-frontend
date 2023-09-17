import { BurgerOrder } from "@/main/core/domain/burger_order";
import { BurgerRepository } from "@/main/core/ports/secondary/burger_repository.port";

export const makeInMemoryBurgerRepository = (
  ingredients?: Partial<BurgerOrder>
): BurgerRepository => {
  return {
    orderBurger() {
      return Promise.resolve({
        bun: "sesame",
        patty: "chicken",
        topping: "lettuce",
        cheese: "cheddar",
        ...ingredients
      });
    },
  };
};
