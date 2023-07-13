import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {
  cases: any ;
  title = "Ecotopia: Cases";

  constructor(private http: HttpClient, private titleService: Title){}

  ngOnInit():void{
    this.http.get<any[]>('http://localhost:80/problems')
    .subscribe(cases =>{
      this.cases = cases;
      console.log(this.cases);
    })

    this.titleService.setTitle(this.title);
  }
}