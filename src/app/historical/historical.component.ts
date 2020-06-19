import { Component, OnInit } from '@angular/core';
import { ForexService } from "../forex.service";
import { Chart } from "chart.js";

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.css']
})
export class HistoricalComponent implements OnInit {

  chart = [];

  data:any;
  public symbols: any;
  public base = "USD";
  public quote = "INR"
  public keys: any;
  public dates = [];

  public history = [];

  constructor(private forex: ForexService) {
      console.log('Historical constructor invoked');
  }

  //Request historical data from the service and sort the dates and create array of dates and prices
  async requestData(base: string = "USD",symbol: string = "INR") {
    this.data = await this.forex.historicalData(base, symbol);
    var dates = Object.keys(this.data.rates);
    dates.sort(function(a,b) {
      a = a.split('-').join('');
      b = b.split('-').join('');
      return a.localeCompare(b);
    });
    var rates = this.data.rates
    var currency = Object.keys(rates[dates[0]]);
    if(this.dates.length == 0) {
      dates.forEach((key) => {
        this.dates.push(key)
      });
    }
    if(this.history.length > 0) {
      this.history = []
    }
    dates.forEach((key) => {
      currency.forEach((curr) => {
        this.history.push(rates[key][curr])
      })
    });

    //Create a time series chart
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: dates.slice(Math.max(dates.length - 300, 0)),
        datasets: [
          {
            data: this.history.slice(Math.max(this.history.length - 300, 0)),
            borderColor: '#3cba9f',
            fill: false
          }
        ]
      },
      options: {
        legend:{
          display: false
        },
        scales: {
          xAxes: [{
            type:'time',
            distribution: 'series',
          }],
          yAxes: [{
            gridLines: {
							drawBorder: false
						},
						scaleLabel: {
							display: true,
            }
          }]
        }
      }
    })

  }

  async ngOnInit() {
      var data = await this.forex.latestRates();
      this.keys = Object.keys(data['rates']);

      await this.requestData();
  }

  //Update chart with different base-quote pairs
  async getChart(base: string, quote: string) {
    await this.requestData(base, quote)
    console.log("Inside getChart"+base,quote)
  }
}
