import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { environment } from '../../environments/environment'

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
    this.http.get<any>(`${environment.apiUrl}solutions`)
    .subscribe(incoming_data => {
      this.solutions = incoming_data;

    });

    this.titleService.setTitle(this.title);
  }
}
