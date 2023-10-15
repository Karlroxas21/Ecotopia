import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { environment } from '../../environments/environment'

@Component({
  selector: 'app-case1',
  templateUrl: './case1.component.html',
  styleUrls: ['./case1.component.css']
})
export class Case1Component {
  problem_trash: any;
  title = "Ecotopia: Cases";

  constructor(private http: HttpClient, private titleService: Title) { }

  ngOnInit(): void {
    this.http.get<any[]>(`${environment.apiUrl}problemtrash`)
      .subscribe(problem_trash => {
        this.problem_trash = problem_trash;
      })

    this.titleService.setTitle(this.title);
  }

}
