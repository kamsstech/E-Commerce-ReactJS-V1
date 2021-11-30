import { SearchResultEntity } from "./searchResultEntity";

export interface SearchEntity {
  loading: boolean;
  payload: SearchResultEntity[];
  error: string;
}
