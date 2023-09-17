import { BeefPatty, Cheddar, Lettuce, SesameBun } from "../../domain/entities/burger";

export interface IngredientsRepository {
    getBuns(): Promise<SesameBun>;
    getMeat(): Promise<BeefPatty>;
    getCheese(): Promise<Cheddar>;
    getVegetables(): Promise<Lettuce>;

}