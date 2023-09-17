import { ServicesProvider } from "./OrderBurgerProvider";

import { makeInMemoryBurgerRepository } from "@/main/secondary_adapters/repositories/burger/in_memory_burger.repository";
import { makeOrderBurgerUseCase } from "@/main/core/use_cases/order_burger.use_case";

const burgerRepository = makeInMemoryBurgerRepository({ patty: "fake-beef" });
const orderBurgerUseCase = makeOrderBurgerUseCase(burgerRepository);


export const Restaurant: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ServicesProvider services={{ orderService: orderBurgerUseCase }}>
      {children}
    </ServicesProvider>
  );
};
