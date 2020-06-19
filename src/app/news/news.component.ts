import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  isShow = true;
  count = 0;

  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  mArticles:Array<any>;
  mSources:Array<any>;
  public selectedSource: string;

  constructor(private newsapi:NewsApiService) {
    console.log('News component constructor called');
  }                                                             //Inject newsapiservice


  ngOnInit() {
      //load articles
      this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
      //load news sources
      this.newsapi.initSources().subscribe(data=> this.mSources = data['sources']);
  }

  searchArticles(source){
    console.log("selected source is: "+source);
    this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }

}
