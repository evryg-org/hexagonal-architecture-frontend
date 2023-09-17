import { makeOrderBurgerUseCase } from "@/main/core/use_cases/order_burger.use_case";
import { makeInMemoryBurgerRepository } from "@/main/secondary_adapters/repositories/burger/in_memory_burger.repository";
import { describe, expect, it } from "vitest";

describe("Order burger", () => {
  it("should order a beef burger from a fake kitchen", async () => {
    const burgerRepository = makeInMemoryBurgerRepository({ patty: "fake-beef" });
    const orderBurgerUseCase = makeOrderBurgerUseCase(burgerRepository);

    const burgerOrder = await orderBurgerUseCase.orderBurger({
      bun: "sesame",
      patty: "beef",
      topping: "lettuce",
      cheese: "cheddar",
    });

    expect(burgerOrder).toEqual({
      bun: "sesame",
      patty: "fake-beef",
      topping: "lettuce",
      cheese: "cheddar",
    });
  });

  it("should order a chicken burger a fake kichen", async () => {
    const burgerRepository = makeInMemoryBurgerRepository({ patty: "fake-chicken" });
    const orderBurgerUseCase = makeOrderBurgerUseCase(burgerRepository);

    const burgerOrder = await orderBurgerUseCase.orderBurger({
      bun: "sesame",
      patty: "chicken",
      topping: "lettuce",
      cheese: "cheddar",
    });

    expect(burgerOrder).toEqual({
      bun: "sesame",
      patty: "fake-chicken",
      topping: "lettuce",
      cheese: "cheddar",
    });
  });

});
