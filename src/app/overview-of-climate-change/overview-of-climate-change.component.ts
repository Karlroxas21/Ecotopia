import { Component, OnInit } from '@angular/core';
import SimpleParallax from 'simple-parallax-js';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-overview-of-climate-change',
  templateUrl: './overview-of-climate-change.component.html',
  styleUrls: ['./overview-of-climate-change.component.css']
})
export class OverviewOfClimateChangeComponent implements OnInit {
  news: any[] = [];
  itemsToShow: number = 20;

  
  constructor(private http: HttpClient, private titleService: Title){}

  ngOnInit():void{
    this.titleService.setTitle("Overview of Climate Change");

    this.http.get<any[]>(`${environment.apiUrl}overviewOfClimateChange`)
    .subscribe(news =>{
      this.news = news;
    })
    throw new Error('Method not implemented.');
  }

  ngAfterViewInit(){
    const scene1 = document.getElementsByClassName('parallax-img-1');
    const parallaxInstance1 = new SimpleParallax(scene1);
  }
}

