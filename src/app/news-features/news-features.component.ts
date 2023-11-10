import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-news-features',
  templateUrl: './news-features.component.html',
  styleUrls: ['./news-features.component.css'],

})
export class NewsFeaturesComponent implements OnInit {
  news: any[] = [];
  itemsToShow: number = 6;

  constructor(private http: HttpClient, private titleService: Title){ }

  ngOnInit(): void{
    this.titleService.setTitle("News & Features");

    this.http.get<any[]>(`${environment.apiUrl}news_features`)
    .subscribe(news =>{
      this.news = news.reverse();
    });
  }

  loadMore(){
    this.itemsToShow += 5;
  }

  readMore(link: String){

  }
}

