import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';
import { Router } from "@angular/router";

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
  constructor(private newsapi:NewsApiService, private router: Router) {
    console.log('News component constructor called');
  }


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

  // goHome() {
  //   this.router.navigate(['/']);
  // }

}
