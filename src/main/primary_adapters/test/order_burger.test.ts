import { makeOrderBurgerUseCase } from "@/main/core/use_cases/order_burger.use_case";
import { makeHttpBurgerRepository } from "@/main/secondary_adapters/repositories/burger/http_burger.repository";
import { makeInMemoryBurgerRepository } from "@/main/secondary_adapters/repositories/burger/in_memory_burger.repository";
import { describe, expect, it } from "vitest";

describe("Order burger", () => {
  it("should order a beef burger from a fake kitchen", async () => {
    const burgerRepository = makeInMemoryBurgerRepository({ patty: "beef" });
    const orderBurgerUseCase = makeOrderBurgerUseCase(burgerRepository);

    const burgerOrder = await orderBurgerUseCase.orderBurger({
      bun: "sesame",
      patty: "beef",
      topping: "lettuce",
      cheese: "cheddar",
    });

    expect(burgerOrder).toEqual({
      bun: "sesame",
      patty: "beef",
      topping: "lettuce",
      cheese: "cheddar",
    });
  });

  it("should order a chicken burger a fake kichen", async () => {
    const burgerRepository = makeInMemoryBurgerRepository({ patty: "chicken" });
    const orderBurgerUseCase = makeOrderBurgerUseCase(burgerRepository);

    const burgerOrder = await orderBurgerUseCase.orderBurger({
      bun: "sesame",
      patty: "chicken",
      topping: "lettuce",
      cheese: "cheddar",
    });

    expect(burgerOrder).toEqual({
      bun: "sesame",
      patty: "chicken",
      topping: "lettuce",
      cheese: "cheddar",
    });
  });

  it("should order a chicken burger from a real kitchen", async () => {
    const burgerRepository = makeHttpBurgerRepository();
    const orderBurgerUseCase = makeOrderBurgerUseCase(burgerRepository);

    const burgerOrder = await orderBurgerUseCase.orderBurger({
      bun: "sesame",
      patty: "chicken",
      topping: "lettuce",
      cheese: "cheddar",
    });

    expect(burgerOrder).toEqual({
      bun: "sesame",
      patty: "chicken",
      topping: "lettuce",
      cheese: "cheddar",
    });
  });

});
