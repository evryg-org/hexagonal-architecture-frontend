import { kitchenUseCase } from "@/server/live_dependencies";
import { burgerHandler } from "@/server/primary_adapters/http/next/burger.handler";

export default burgerHandler(kitchenUseCase);
