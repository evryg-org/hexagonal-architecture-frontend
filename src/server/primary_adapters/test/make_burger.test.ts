import { makeKitchen } from "@/server/core/use_cases/make_burger.use_case";
import { makeInMemoryIngredientsRepository } from "@/server/secondary_adapters/repositories/ingredients/in_memory_ingredients.repository";
import { describe, expect, it } from "vitest";

describe("Kitchen", () => {
  it("should make a burger", async () => {
    const ingredientsRepository = makeInMemoryIngredientsRepository();
    const kitchen = makeKitchen(ingredientsRepository);

    const burger = await kitchen.makeBurger();
    
    expect(burger).toEqual({
      bun: { type: "sesame" },
      patty: { type: "chicken" },
      topping: { type: "lettuce" },
      cheese: { type: "cheddar" },
    });
  });
});
