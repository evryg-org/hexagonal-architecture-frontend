import { makeKitchen } from "@/server/core/use_cases/make_burger.use_case";
import { describe, expect, it } from "vitest";

describe("Kitchen", () => {
  it("should make a burger", async () => {
    const kitchen = makeKitchen();

    const burger = await kitchen.makeBurger();
    expect(burger).toEqual({
      bun: "sesame",
      patty: "beef",
      topping: "lettuce",
      cheese: "cheddar",
    });
  });
});
