import { Component, OnInit } from '@angular/core';
import { ForexService } from "../forex.service";

@Component({
  selector: 'app-forexapi',
  templateUrl: './forexapi.component.html',
  styleUrls: ['./forexapi.component.css']
})
export class ForexapiComponent implements OnInit {

  data:any;
  rates:any;
  keys:any;
  watch:any;
  watch_rates:any;
  watch_keys:any;
  public watchlist=[];
  public showData=false;
  public base: string;
  constructor(private forex: ForexService) {
    console.log('Forex component constructor called');
  }

  async requestData(base) {
    this.data = await this.forex.latestRates(base);
    this.rates = this.data['rates'];
    this.keys = Object.keys(this.rates);
  }

  async ngOnInit() {
    await this.requestData(this.base);
    console.log("Called Init method");
    }

  async getData() {
    this.showData = true;
    await this.requestData(this.base);
  }

  addToWatchlist(currency) {
    this.watchlist.push(currency);
    console.log("Pushed:"+currency);
    console.log("Updated watchlist:"+this.watchlist);
  }

  async getWatchlist() {
    this.watch = await this.forex.specificSymbols(this.watchlist.join(','));
    this.watch_rates= this.watch['rates'];
    this.watch_keys = Object.keys(this.watch_rates);
  }
}
