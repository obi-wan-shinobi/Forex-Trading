import { Component } from '@angular/core';
import { Message } from './message';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public news_value = false;
  public trade = false;
  public message : Message;
  public messages : Message[];
    constructor(){
    this.message = new Message('', 'assets/images/user.png');
    this.messages = [
      new Message('Welcome to chatbot universe', 'assets/images/bot.png', new Date())
    ];
  }

  setNews() {
    return this.news_value = true;
  }

  setTradingView() {
    return this.trade = true;
  }
}
