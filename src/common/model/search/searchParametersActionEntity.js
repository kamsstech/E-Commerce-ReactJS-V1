import { SearchParametersResultEntity } from "./searchParametersResultEntity";

export interface SearchParametersActionEntity {
    type:string;
    // loading: boolean;
    payload: SearchParametersResultEntity;
    // error: string;
  }
  