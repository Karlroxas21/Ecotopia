import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

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
    this.http.get<any[]>(`${environment.apiUrl}news_features`)
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

