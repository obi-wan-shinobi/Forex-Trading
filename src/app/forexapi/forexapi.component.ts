import { Component, OnInit } from '@angular/core';
import { ForexService } from "../forex.service";

@Component({
  selector: 'app-forexapi',
  templateUrl: './forexapi.component.html',
  styleUrls: ['./forexapi.component.css']
})
export class ForexapiComponent implements OnInit {

  data:any;
  rates:Array<any>;
  constructor(private forex: ForexService) {
    console.log('Forex component constructor called');
  }

async  ngOnInit() {
    this.data = await this.forex.latestRates();
    console.log(typeof(this.data));
    for(let rate of this.data){
      this.rates.push(rate);
    }
  }
}
