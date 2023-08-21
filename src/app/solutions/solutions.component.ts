import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent {
  solutions: any;
  title = "Ecotopia: Solutions";

  constructor(private http: HttpClient,
    private titleService: Title) { }

  ngOnInit(): void{
    this.http.get<any>('http://localhost:80/solutions')
    .subscribe(incoming_data => {
      this.solutions = incoming_data;

    });

    this.titleService.setTitle(this.title);
  }
}
