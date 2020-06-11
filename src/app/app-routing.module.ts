import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from "./news/news.component";
import { TradingviewComponent } from "./trading-view/trading-view.component";
import { ForexCrossRatesComponent } from "./forex-cross-rates/forex-cross-rates.component";
import { ForexapiComponent } from "./forexapi/forexapi.component";
import { ScreenerComponent } from "./screener/screener.component";
import { HomeComponent } from "./home/home.component";
import { ChatDialogComponent } from "./chat-dialog/chat-dialog.component";
import { AboutComponent } from "./about/about.component";
import { TradingPlatformComponent } from './trading-platform/trading-platform.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'news', component: NewsComponent},
  {path: 'tradingview', component: TradingviewComponent},
  {path: 'forexcrossrates', component: ForexCrossRatesComponent},
  {path: 'forexapi', component: ForexapiComponent},
  {path: 'screener', component: ScreenerComponent},
  {path: 'chatbot', component: ChatDialogComponent},
  {path: 'about', component: AboutComponent},
  {path: 'trading', component: TradingPlatformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [NewsComponent, TradingviewComponent, ForexapiComponent, ForexCrossRatesComponent, ScreenerComponent, HomeComponent, ChatDialogComponent, AboutComponent, TradingPlatformComponent]

