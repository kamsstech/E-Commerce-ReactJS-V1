
import {ForgorpassEntity} from "./forgotPassEntity"

export interface SavePassEntity {
  loading: boolean;
  payload: { message: string };
  error: string;
  success? :ForgorpassEntity | []
}
