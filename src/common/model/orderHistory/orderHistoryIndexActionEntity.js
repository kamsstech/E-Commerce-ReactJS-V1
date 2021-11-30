import { OrderHistoryIndexResultEntity } from "./orderHistoryIndexResultEntity";

export interface OrderHistoryIndexActionEntity {
    type:string;
    // loading: boolean;
    payload: OrderHistoryIndexResultEntity;
    // error: string;
  }
  