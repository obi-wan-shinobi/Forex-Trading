import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-forex-cross-rates',
  templateUrl: './forex-cross-rates.component.html',
  styleUrls: ['./forex-cross-rates.component.css']
})
export class ForexCrossRatesComponent implements AfterViewInit {

  symbol: string = "forex-cross-rates";
  settings: any = {};
  widgetId: string = '';
  counter = 0;

  public currencies = [
    "EUR","USD","JPY","GBP","CHF","AUD","CAD","NZD","CNY",
    "TRY","SEK","NOK","DKK","ZAR","HKD","SGD","THB","MXN",
    "IDR","KRW","PLN","ISK","KWD","PHP","MYR","INR","TWD",
    "SAR","RUB","ILS"
  ] ;

  public user_currencies = [
    "EUR","USD","JPY","GBP","CHF","AUD","CAD","NZD","CNY","INR"
  ]

  @ViewChild('containerDiv', {static: true}) containerDiv: ElementRef;

  constructor( private _elRef: ElementRef, private router: Router ) {
  }

  forexCrossRates(user_currencies) {
    setTimeout(() => {
      this.widgetId = `${ this.symbol }_fundamentals`;

      if (window.addEventListener) {
        window.addEventListener( 'message', ( e: any ) => {
          if( e && e.data ) {
            console.log(e);
            const payload = e.data;

            if (payload.name === 'tv-widget-no-data' && payload.frameElementId === this.widgetId) {
              this.containerDiv.nativeElement.style.display = 'none';
              }
            }
          }, false,
        );
      }
      this.settings = {
        "width": 840,
        "height": 400,
        "currencies": this.user_currencies,
        "isTransparent:": true,
        "colorTheme": "dark",
        "locale": "in",
        "largeChartUrl": "http://localhost:4200/forexcrossrates"
      };

      const script = document.createElement( 'script' );
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js';
      script.async = true;
      script.id = this.widgetId;
      script.innerHTML = JSON.stringify( this.settings );
      this.containerDiv.nativeElement.appendChild( script );
      const brandingDiv = document.createElement( 'div' );
    } );
  }

  ngAfterViewInit() {
    this.forexCrossRates(this.user_currencies)
    console.log(this.containerDiv)
}

  AddCurrency(currency) {
    console.log(currency)
    if(this.user_currencies.includes(currency)) {
      var index = this.user_currencies.indexOf(currency);
      this.user_currencies.splice(index, 1);
      console.log("Removed:"+currency);
      console.log("Updated watchlist:"+this.user_currencies);
    }
    else {
      this.user_currencies.push(currency);
      console.log("Pushed:"+currency);
      console.log("Updated watchlist:"+this.user_currencies);
    }
    this.forexCrossRates(this.user_currencies)
    console.log("AddCurrency")
    console.log(this.containerDiv)
  }
}
