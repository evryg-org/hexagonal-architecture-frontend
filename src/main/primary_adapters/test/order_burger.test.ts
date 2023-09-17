import { makeOrderBurgerUseCase } from "@/main/core/use_cases/order_burger.use_case";
import { describe, expect, it } from "vitest";

describe("Make burger", () => {
  it("should make a burger", async () => {
    const orderBurgerUseCase = makeOrderBurgerUseCase();

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
