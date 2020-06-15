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
    }
}
