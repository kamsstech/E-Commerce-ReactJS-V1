import {ChangePasRespEntity} from '..'
export interface RegisterActionEntity {
  type: string;
  loading: boolean;
  error: string;
  payload? : ChangePasRespEntity | []
}
