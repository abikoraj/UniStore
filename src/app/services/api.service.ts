import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers:HttpHeaders;
  authheaders:HttpHeaders;
  token:"";
  url="https://ecomtest.gharsaaman.com/api/";
  constructor(public client:HttpClient) {
    this.headers = new HttpHeaders()
    .append('Content-Type', 'application/json')
    .append('accept', 'application/json')
    .append('xpsu', '123456');
    console.log(this.headers);
    this.authheaders=this.headers.append("Authorization","Bearer "+this.token);
   }

   get(param){
    return this.client.get(this.url+param,{headers:this.headers});
  }
}
