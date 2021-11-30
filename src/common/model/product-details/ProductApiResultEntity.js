import { ProductResultEntity } from "./ProductResultEntity";
import { ProductAlternateEntity } from "./productAlternateEntity";

export interface ProductApiResultEntity {
  result: ProductResultEntity[];
  alternate: ProductAlternateEntity[];
}
