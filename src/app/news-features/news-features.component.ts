import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news-features',
  templateUrl: './news-features.component.html',
  styleUrls: ['./news-features.component.css'],

})
export class NewsFeaturesComponent implements OnInit {
  news: any[] = [];
  itemsToShow: number = 5;

  constructor(private http: HttpClient){}

  ngOnInit(): void{
    this.http.get<any[]>('http://localhost:3000/')
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

