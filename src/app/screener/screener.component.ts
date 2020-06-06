import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screener',
  templateUrl: './screener.component.html',
  styleUrls: ['./screener.component.css']
})
export class ScreenerComponent implements AfterViewInit {

  symbol: string = "screener";
  settings: any = {};
  widgetId: string = '';

  @ViewChild('containerDiv', {static: true}) containerDiv: ElementRef;

  constructor( private _elRef: ElementRef, private router: Router ) { }

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
        "width": 1100,
        "height": 512,
        "defaultColumn": "overview",
        "defaultScreen": "general",
        "market": "forex",
        "showToolbar": true,
        "colorTheme": "light",
        "locale": "in"
      };

      const script = document.createElement( 'script' );
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
      script.async = true;
      script.id = this.widgetId;
      script.innerHTML = JSON.stringify( this.settings );
      this.containerDiv.nativeElement.appendChild( script );
      const brandingDiv = document.createElement( 'div' );
    } );
  }
}
