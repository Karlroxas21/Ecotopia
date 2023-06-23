import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {
  cases: any[] = [];

  constructor(private http: HttpClient){}

  ngOnInit():void{
    this.http.get<any[]>('http://localhost:80/problems')
    .subscribe(cases =>{
      this.cases = cases;
    })
    throw new Error('Method not implemented.');

  }
}