import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

export class RealTimeData {
  constructor(
    public From_Currency_Code: string,
    public From_Currency_Name: string,
    public To_Currency_Code: string,
    public To_Currency_Name: string,
    public Exchange_Rate: number,
    public Last_Refreshed: Date,
    public Time_Zone: string,
    public Bid_price: number,
    public Ask_price: number
  ) {}
}

@Injectable({
  providedIn: 'root'
})

export class TradingService {

  api_key = '0f25e67d05msh924d9f48b22beb6p181adejsn47547d45f0d5'

  constructor(private _http: HttpClient) { }

  getRealtimeData(from_currency: string = "USD", to_currency: string = "INR"): Promise<any> {
    return this._http.get("https://alpha-vantage.p.rapidapi.com/query?rapidapi-key="+this.api_key+"&function=CURRENCY_EXCHANGE_RATE&to_currency="+to_currency+"&from_currency="+from_currency)
      .toPromise();
  }

}
