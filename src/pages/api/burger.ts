import { kitchenUseCase } from "@/server/live_dependencies";
import { makeBurgerHandler } from "@/server/primary_adapters/http/next/burger.handler";

export default makeBurgerHandler(kitchenUseCase);
