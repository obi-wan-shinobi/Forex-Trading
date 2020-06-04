import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public news_value = false;
  public trade = false;
  constructor(){ }

  setNews() {
    return this.news_value = true;
  }

  setTradingView() {
    return this.trade = true;
  }
}
