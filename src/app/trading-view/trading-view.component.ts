import { Component, OnInit, AfterViewInit } from '@angular/core';

declare const TradingView: any;

@Component({
  selector: 'app-tradingview',
  templateUrl: './trading-view.component.html',
  styleUrls: ['./trading-view.component.css']
})

export class TradingviewComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    new TradingView.widget(
      {
      "width": 980,
      "height": 610,
      "symbol": "FX:EURUSD",
      "timezone": "Etc/UTC",
      "theme": "Light",
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
