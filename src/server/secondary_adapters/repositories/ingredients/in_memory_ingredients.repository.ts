import { IngredientsRepository } from "@/server/core/ports/secondary/ingredients_repository.port";

export const makeInMemoryIngredientsRepository = (): IngredientsRepository => {
  const ingredientsRepository = {
    getBuns() {
      return Promise.resolve({ type: "sesame" });
    },
    getCheese() {
      return Promise.resolve({ type: "cheddar" });
    },
    getMeat() {
      return Promise.resolve({ type: "chicken" });
    },
    getVegetables() {
      return Promise.resolve({ type: "lettuce" });
    },
  };

  return ingredientsRepository;
};
