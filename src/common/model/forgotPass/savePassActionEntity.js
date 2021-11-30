import {ForgorpassEntity} from "./forgotPassEntity"

export interface SavePassActionEntity {
  type: string;
  loading: boolean;
  payload: { message: string };
  error: string;
  success? :ForgorpassEntity | []

}
