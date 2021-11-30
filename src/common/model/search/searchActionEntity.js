import { SearchResultEntity } from "./searchResultEntity";

export interface SearchActionEntity {
  type: string;
  loading: boolean;
  payload: SearchResultEntity[];
  error: string;
}
