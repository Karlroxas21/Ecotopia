import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { environment } from '../../environments/environment'

@Component({
  selector: 'app-case4',
  templateUrl: './case4.component.html',
  styleUrls: ['./case4.component.css']
})
export class Case4Component {
  effects_climate_change: any;
  title = "Ecotopia: Cases";

  constructor(private http: HttpClient, private titleService: Title){}

  ngOnInit(): void{
    this.http.get<any[]>(`${environment.apiUrl}effectsofclimatechange`)
    .subscribe(effects_climate_change =>{
      this.effects_climate_change = effects_climate_change;
    })

    this.titleService.setTitle(this.title)
  }
}
