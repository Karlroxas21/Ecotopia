import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-effectsofclimatechange',
  templateUrl: './effectsofclimatechange.component.html',
  styleUrls: ['./effectsofclimatechange.component.css']
})
export class EffectsofclimatechangeComponent implements OnInit {
  effects_climate_change: any;
  title = "Ecotopia: Cases";

  constructor(private http: HttpClient, private titleService: Title){}

  ngOnInit(): void{
    this.http.get<any[]>('http://localhost:80/effectsofclimatechange')
    .subscribe(effects_climate_change =>{
      this.effects_climate_change = effects_climate_change;
      console.log(effects_climate_change);
    })

    this.titleService.setTitle(this.title)
  }

}
