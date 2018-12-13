import { HttpResultModel } from './../models/HttpResultModel';
import { HttpProvider } from './../../providers/http/http';

export abstract class ProviderBase<T>{

    constructor{
        public url:string,
        public http:HttpProvider){

     }

        get():Promise<HttpResultModel> {
            return this.http.get(this.url);
        }
    }
}