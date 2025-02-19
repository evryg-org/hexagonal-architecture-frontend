import httpMocks from "node-mocks-http";
import { describe, expect, it } from "vitest";
import { makeBurgerHandler } from "./burger.handler";
import { KitchenUseCase } from "@/server/core/ports/primary/use_cases/make_burger.port";

describe("Burger Next.js HTTP handler", () => {
  it("should process a valid burger order", async () => {
    const happyKitchenUseCase: KitchenUseCase = {
      makeBurger() {
        return Promise.resolve({
          bun: { type: "sesame" },
          patty: { type: "chicken" },
          topping: { type: "lettuce" },

          cheese: { type: "cheddar" },
        });
      },
    };

    const handler = makeBurgerHandler(happyKitchenUseCase);
    const response = httpMocks.createResponse();

    await handler(httpMocks.createRequest({ method: "POST" }), response);

    expect(response._getJSONData()).toEqual({
      bun: { type: "sesame" },
      patty: { type: "chicken" },
      topping: { type: "lettuce" },
      cheese: { type: "cheddar" },
    });
  });

  it("should NOT process an invalid burger order", async () => {
    const happyKitchenUseCase: KitchenUseCase = {
      makeBurger() {
        return Promise.resolve({
          bun: { type: "sesame" },
          patty: { type: "chicken" },
          topping: { type: "lettuce" },

          cheese: { type: "cheddar" },
        });
      },
    };

    const handler = makeBurgerHandler(happyKitchenUseCase);
    const response = httpMocks.createResponse();

    await handler(httpMocks.createRequest({ method: "GET" }), response);

    expect(response._getJSONData()).toEqual({ error: "Method not allowed" });
  });
});
