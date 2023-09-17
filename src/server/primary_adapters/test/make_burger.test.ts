import { IngredientsRepository } from "@/server/core/ports/secondary/ingredients_repository.port";
import { makeKitchen } from "@/server/core/use_cases/make_burger.use_case";
import { describe, expect, it } from "vitest";

describe("Kitchen", () => {
  it("should make a burger", async () => {
    const ingredientsRepository: IngredientsRepository = {
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
