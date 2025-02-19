import { Burger } from "@/server/core/domain/entities/burger";


export interface KitchenUseCase {
  makeBurger(): Promise<Burger>;
}
