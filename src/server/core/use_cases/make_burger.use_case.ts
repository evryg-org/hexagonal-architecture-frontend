import { Kitchen } from "../ports/primary/use_cases/make_burger.port";
import { IngredientsRepository } from "../ports/secondary/ingredients_repository.port";

export const makeKitchen = (
  ingredientsRepository: IngredientsRepository
): Kitchen => {
  return {
    async makeBurger() {
      const bun = await ingredientsRepository.getBuns();
      const patty = await ingredientsRepository.getMeat();
      const topping = await ingredientsRepository.getVegetables();
        const cheese = await ingredientsRepository.getCheese();

      return Promise.resolve({
        bun,
        patty,
        topping,
        cheese,
      });
    },
  };
};
