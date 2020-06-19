import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ForexService {

  //api_key = 'd69bd84631322707c8df6909640a8d14'

  constructor(private _http: HttpClient) { }

  //Function to get latest rates
  latestRates(base: string = "USD"): Promise<any> {
    //return this._http.get('http://data.fixer.io/api/latest?access_key='+this.api_key+'&base='+base).toPromise();
    return this._http.get('https://api.exchangeratesapi.io/latest?base='+base).toPromise();
  }

  //Function to request specific symbols data for watchlist
  specificSymbols(symbols: string = "USD", base: string="USD"): Promise<any> {
    return this._http.get("https://api.exchangeratesapi.io/latest?base="+base+"&symbols="+symbols).toPromise();
  }

  //Function for historical data to use in charts
  historicalData(base: string="USD", symbols: string="INR"): Promise<any> {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    var dt = yyyy + '-' + mm + '-' + dd;
    return this._http.get("https://api.exchangeratesapi.io/history?base="+base+"&start_at=2019-01-01&end_at="+dt+"&symbols="+symbols).toPromise();
  }
}
