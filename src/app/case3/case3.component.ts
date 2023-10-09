import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-case3',
  templateUrl: './case3.component.html',
  styleUrls: ['./case3.component.css']
})
export class Case3Component {
  causes_climate_change: any;
  title = "Ecotopia: Cases";

  constructor(private http: HttpClient, private titleService: Title){}

  ngOnInit(): void {
      this.http.get<any[]>('http://localhost:80/causesofclimatechange')
      .subscribe(cause_climate_change =>{
        this.causes_climate_change = cause_climate_change;
        console.log(cause_climate_change);
      })

      this.titleService.setTitle(this.title);
  }
}
