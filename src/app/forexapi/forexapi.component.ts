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

}
