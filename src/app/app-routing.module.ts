import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from "./news/news.component";
import { TradingviewComponent } from "./trading-view/trading-view.component";
import { ForexapiComponent } from "./forexapi/forexapi.component";

const routes: Routes = [
  {path: 'news', component: NewsComponent},
  {path: 'tradingview', component: TradingviewComponent},
  {path: 'forex', component: ForexapiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [NewsComponent, TradingviewComponent, ForexapiComponent]
