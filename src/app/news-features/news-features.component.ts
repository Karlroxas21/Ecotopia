import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news-features',
  templateUrl: './news-features.component.html',
  styleUrls: ['./news-features.component.css'],

})
export class NewsFeaturesComponent implements OnInit {
  news: any[] = [];
  itemsToShow: number = 6;

  constructor(private http: HttpClient){}

  ngOnInit(): void{
    this.http.get<any[]>('http://localhost:80/news_features')
    .subscribe(news =>{
      this.news = news;
    });
  }

  loadMore(){
    this.itemsToShow += 5;
  }

  readMore(link: String){

  }
}

