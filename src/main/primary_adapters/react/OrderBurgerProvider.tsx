import { OrderBurgerUseCase } from "@/main/core/ports/primary/order_burger.port";
import { makeServicesInjector } from "./ServiceInjector";

const { useService, ServicesProvider } = makeServicesInjector<{
  orderService: OrderBurgerUseCase;
}>();

export { useService, ServicesProvider };
