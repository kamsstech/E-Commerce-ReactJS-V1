import {ChangePasRespEntity} from '..'

export interface RegisterEntity {
  loading: boolean;
  error: string;
  payload? : ChangePasRespEntity | []
}
