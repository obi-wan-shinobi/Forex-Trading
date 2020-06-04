import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-forex-cross-rates',
  templateUrl: './forex-cross-rates.component.html',
  styleUrls: ['./forex-cross-rates.component.css']
})
export class ForexCrossRatesComponent implements OnInit, AfterViewInit {

  public forexcrossrates;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    forexcrossrates: {
      "width": 840,
      "height": 400,
      "currencies": [
        "EUR",
        "USD",
        "JPY",
        "GBP",
        "CHF",
        "AUD",
        "CAD",
        "NZD",
        "CNY",
        "INR"
      ],
      "isTransparent": true,
      "colorTheme": "light",
      "locale": "in"
    };
  }
}
