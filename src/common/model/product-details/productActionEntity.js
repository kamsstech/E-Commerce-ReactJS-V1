import { ProductApiResultEntity } from "./ProductApiResultEntity";

export interface ProductActionEntity {
  type: string;
  loading: boolean;
  payload: ProductApiResultEntity;
  error: string;
}
