import { LoginResultEntity } from "./loginResultEntity";

export interface LoginActionEntity {
  type: string;
  loading: boolean;
  error: string;
}
