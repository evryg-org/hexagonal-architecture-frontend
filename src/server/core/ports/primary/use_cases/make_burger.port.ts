import { Burger } from "@/server/core/domain/entities/burger";


export interface Kitchen {
  makeBurger(): Promise<Burger>;
}
