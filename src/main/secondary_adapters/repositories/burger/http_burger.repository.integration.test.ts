import { makeOrderBurgerUseCase } from "@/main/core/use_cases/order_burger.use_case";
import { makeHttpBurgerRepository } from "@/main/secondary_adapters/repositories/burger/http_burger.repository";
import { describe, expect, it } from "vitest";

describe("Order burger", () => {
  it("should order a chicken burger from a real kitchen", async () => {
    const burgerRepository = makeHttpBurgerRepository();

    const toto = await burgerRepository.orderBurger({
        bun: "sesame",
        patty: "chicken",
        topping: "lettuce",
        cheese: "cheddar",
      })

    expect(toto).toEqual({
      bun: "sesame",
      patty: "chicken",
      topping: "lettuce",
      cheese: "cheddar",
    });
  });
});
