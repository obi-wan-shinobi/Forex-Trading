import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-forex-cross-rates',
  templateUrl: './forex-cross-rates.component.html',
  styleUrls: ['./forex-cross-rates.component.css']
})
export class ForexCrossRatesComponent implements AfterViewInit {

  symbol: string = "forex-cross-rates";
  settings: any = {};
  widgetId: string = '';

  @ViewChild('containerDiv', {static: true}) containerDiv: ElementRef;

  constructor( private _elRef: ElementRef ) { }

  ngAfterViewInit() {

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

      // this.settings = {
      //    symbol: this.symbol,
      //    colorTheme: 'light',
      //    isTransparent: false,
      //    largeChartUrl: '',
      //    displayMode: 'regular',
      //    height: 300,
      //    autosize: true,
      //    locale: 'en',
      //  };

      this.settings = {
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
        "isTransparent:": false,
        "colorTheme": "light",
        "locale": "in"
      };

      const script = document.createElement( 'script' );
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js';
      script.async = true;
      script.id = this.widgetId;
      script.innerHTML = JSON.stringify( this.settings );
      this.containerDiv.nativeElement.appendChild( script );
      const brandingDiv = document.createElement( 'div' );
      brandingDiv.innerHTML = `
      <div class="tradingview-widget-copyright">
      <a href="https://www.tradingview.com/symbols/${ this.symbol }/" rel="noopener" target="_blank">
      <span class="blue-text">${ this.symbol } Fundamental Data</span></a>
               by TradingView
           </div>
      `
    } );
}
}
