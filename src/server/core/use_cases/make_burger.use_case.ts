import { Kitchen } from "../ports/primary/use_cases/make_burger.port";

export const makeKitchen = (): Kitchen => {
  return {
    makeBurger() {
      return Promise.resolve({
        bun: "sesame",
        patty: "beef",
        topping: "lettuce",
        cheese: "cheddar",
      });
    },
  };
};
