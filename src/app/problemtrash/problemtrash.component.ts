import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-problemtrash',
  templateUrl: './problemtrash.component.html',
  styleUrls: ['./problemtrash.component.css']
})
export class ProblemtrashComponent implements OnInit {
  problem_trash: any;
  title = "Ecotopia: Cases";

  constructor(private http: HttpClient, private titleService: Title){}

  ngOnInit(): void{
    this.http.get<any[]>('http://localhost:80/problemtrash')
    .subscribe(problem_trash =>{
      this.problem_trash = problem_trash;
    })

    this.titleService.setTitle(this.title);
  }
}
