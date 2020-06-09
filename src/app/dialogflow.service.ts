import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Headers;
import { Observable } from 'rxjs/';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';

@Injectable()
export class DialogflowService {

  private baseURL: string = "https://api.dialogflow.com/v1/query?v=20150910";
  private token: string = environment.token;

  constructor(private http: HttpClient){}

  public getResponse(query: string){
    let data = {
      query : query,
      lang: 'en',
      sessionId: '12345'
    }
    return this.http
      .post(`${this.baseURL}`, data, {headers: this.getHeaders()})
      .map(res => {
        return res
      })
  }

  public getHeaders(){
    let headers = new Headers();
    headers.append('Authorization', `Bearer ${this.token}`);
    return headers;
  }
}