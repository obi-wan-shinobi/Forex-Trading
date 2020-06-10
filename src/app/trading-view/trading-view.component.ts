import { Component, OnInit, AfterViewInit, ElementRef, Input, ViewChild } from '@angular/core';
import { Router } from "@angular/router";

declare const TradingView: any;

@Component({
  selector: 'app-tradingview',
  templateUrl: './trading-view.component.html',
  styleUrls: ['./trading-view.component.css']
})

export class TradingviewComponent implements AfterViewInit {

  symbol: string = "technical-analysis";
  settings: any = {};
  widgetId: string = '';

  @ViewChild('containerDiv', {static: true}) containerDiv: ElementRef;

  constructor(private router: Router,  private _elRef: ElementRef,) { }

  ngAfterViewInit(){
    new TradingView.widget(
      {
      "width": 980,
      "height": 610,
      "symbol": "OANDA:USDINR",
      "timezone": "Etc/UTC",
      "theme": "Dark",
      "style": "1",
      "locale": "en",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "withdateranges": true,
      "range": "ytd",
      "hide_side_toolbar": false,
      "allow_symbol_change": true,
      "show_popup_button": true,
      "popup_width": "1000",
      "popup_height": "650",
      "no_referral_id": true,
      "container_id": "tradingview_bac65"
    }
      );

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
          "interval": "5m",
          "width": 425,
          "isTransparent": true,
          "height": 450,
          "symbol": "OANDA:USDINR",
          "showIntervalTabs": true,
          "locale": "in",
          "colorTheme": "dark"
        };

        const script = document.createElement( 'script' );
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js';
        script.async = true;
        script.id = this.widgetId;
        script.innerHTML = JSON.stringify( this.settings );
        this.containerDiv.nativeElement.appendChild( script );
        const brandingDiv = document.createElement( 'div' );
      } );
  }

}
