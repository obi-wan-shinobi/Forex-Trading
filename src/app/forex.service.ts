import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ForexService {

  //api_key = 'd69bd84631322707c8df6909640a8d14'

  constructor(private _http: HttpClient) { }

  latestRates(base: string = "USD"): Promise<any> {
    //return this._http.get('http://data.fixer.io/api/latest?access_key='+this.api_key+'&base='+base).toPromise();
    return this._http.get('https://api.exchangeratesapi.io/latest?base='+base).toPromise();
  }
}
