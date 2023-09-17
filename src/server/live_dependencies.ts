import { makeKitchen } from "./core/use_cases/make_burger.use_case";
import { makeInMemoryIngredientsRepository } from "./secondary_adapters/repositories/ingredients/in_memory_ingredients.repository";

const inMemoryIngredientsRepository = makeInMemoryIngredientsRepository();

export const kitchenUseCase = makeKitchen(inMemoryIngredientsRepository);
