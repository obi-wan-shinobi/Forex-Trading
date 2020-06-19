import { Component, OnInit } from '@angular/core';
import { TradingService, RealTimeData } from "../trading.service";

@Component({
  selector: 'app-trading-platform',
  templateUrl: './trading-platform.component.html',
  styleUrls: ['./trading-platform.component.css']
})
export class TradingPlatformComponent implements OnInit {

  public RealTimeDataArr: RealTimeData[];
  public realData: RealTimeData;
  public showData = false;

  public base: string;
  public quote: string;

  public trade = false;
  public option: string;
  public buyVolume;
  public sellVolume;
  public sellPrice: number;
  public buyPrice: number;
  public custBuy: string;
  public custSell: string;

  public currencies = [
    "EUR","USD","JPY","GBP","CHF","AUD","CAD","NZD","CNY",
    "TRY","SEK","NOK","DKK","ZAR","HKD","SGD","THB","MXN",
    "IDR","KRW","PLN","ISK","KWD","PHP","MYR","INR","TWD",
    "SAR","RUB","ILS"
  ] ;

  constructor(private trading: TradingService) {
      console.log("Trading Platform constructor called");
  }

  async getRates(base: string = "USD", quote: string = "INR") {
    var data: any;
    var temp:any;
    data = await this.trading.getRealtimeData(base, quote);
    temp = data["Realtime Currency Exchange Rate"];
    const from_code = temp["1. From_Currency Code"];
    const from_name = temp["2. From_Currency Name"];
    const to_code = temp["3. To_Currency Code"];
    const to_name = temp["4. To_Currency Name"];
    const rate = temp["5. Exchange Rate"];
    const timestamp = temp["6. Last Refreshed"];
    const timeZone = temp["7. Time Zone"];
    var bid = temp["8. Bid Price"];
    var ask = temp["9. Ask Price"];

    bid = Number(Number(bid).toFixed(4));
    ask = Number(Number(ask).toFixed(4));
    var spread = 0;
    if(to_code == 'JPY') {
      bid = Number(Number(bid).toFixed(2));
      ask = Number(Number(ask).toFixed(2));
      spread = Number(Number((ask-bid)*100/ask).toFixed(2))
      console.log("Inside JPY:"+spread)
    }
    else {
      spread = Number(Number((ask-bid)*10000/ask).toFixed(4));
    }

    const realData = new RealTimeData(
      from_code,
      from_name,
      to_code,
      to_name,
      rate,
      timestamp,
      timeZone,
      bid,
      ask,
      spread
    );
    return realData;
  }

  async ngOnInit(){
    this.realData = await this.getRates();
    console.log(this.currencies);
  }

  tradeInit() {
    this.trade = true;
    if(this.option == 'buy') {
      if(this.custBuy == this.base) {
        console.log(typeof(this.buyVolume));
        this.buyPrice = Number(Number(this.realData.Bid_price * this.buyVolume).toFixed(4));
      }
      else {
        this.buyPrice = Number(Number(1/this.realData.Bid_price * this.buyVolume).toFixed(4));
      }
    }
    else {
      if(this.custBuy == this.base) {
        this.sellPrice = Number(Number(this.realData.Ask_price * this.sellVolume).toFixed(4));
      }
      else {
        this.sellPrice = Number(Number(1/this.realData.Ask_price * this.sellVolume).toFixed(4));
      }
    }
  }

  async show() {
    this.showData = true;
    this.realData = await this.getRates(this.base, this.quote);

    console.log("After Changes:"+this.base, this.quote);
  }
}
