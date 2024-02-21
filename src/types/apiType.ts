import { AxiosResponse } from 'axios';

export interface IApiRes<T> {
  rsltCd: string;
  rsltMsg: string;
  data: T;
}
