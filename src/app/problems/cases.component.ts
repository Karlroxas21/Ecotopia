import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {
  cases: any[] = [];
  itemsToShow: number = 20;

  constructor(private http: HttpClient){}

  ngOnInit():void{
    this.http.get<any[]>('http://localhost:3000/problems')
    .subscribe(cases =>{
      this.cases = cases;
    })
    throw new Error('Method not implemented.');

  }
}