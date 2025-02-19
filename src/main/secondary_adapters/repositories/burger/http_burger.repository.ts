import { BurgerRepository } from "@/main/core/ports/secondary/burger_repository.port";

export const makeHttpBurgerRepository = (): BurgerRepository => {
  return {
    async orderBurger() {
      const burger = await fetch("http://localhost:3000/api/burger", {
        method: "POST",
      }).then((response) => response.json());

      return {
        bun: burger.bun.type,
        patty: burger.patty.type,
        topping: burger.topping.type,
        cheese: burger.cheese.type,
      };
    },
  };
};
