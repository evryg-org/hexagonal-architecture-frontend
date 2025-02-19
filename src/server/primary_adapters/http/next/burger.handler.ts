import { Burger } from "@/server/core/domain/entities/burger";
import { KitchenUseCase } from "@/server/core/ports/primary/use_cases/make_burger.port";
import type { NextApiRequest, NextApiResponse } from "next";

type BurgerHandlerError = {
  error: string;
};

export const makeBurgerHandler =
  (kitchenUseCase: KitchenUseCase) =>
  async (
    req: NextApiRequest,
    res: NextApiResponse<Burger | BurgerHandlerError>
  ) => {
    if (req.method == "POST") {
      const burger = await kitchenUseCase.makeBurger();

      return res.status(200).json(burger);
    } else {
      return res.status(405).json({ error: "Method not allowed" });
    }
  };
