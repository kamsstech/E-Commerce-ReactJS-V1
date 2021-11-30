import { ProductApiResultEntity } from "./ProductApiResultEntity";

export interface ProductEntity {
  loading: boolean;
  payload: ProductApiResultEntity;
  error: string;
}
