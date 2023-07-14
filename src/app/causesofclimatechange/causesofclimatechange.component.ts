import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-causesofclimatechange',
  templateUrl: './causesofclimatechange.component.html',
  styleUrls: ['./causesofclimatechange.component.css']
})
export class CausesofclimatechangeComponent implements OnInit {
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
