import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-problemjeepoutdatedengine',
  templateUrl: './problemjeepoutdatedengine.component.html',
  styleUrls: ['./problemjeepoutdatedengine.component.css']
})
export class ProblemjeepoutdatedengineComponent implements OnInit {
  outdated_engine: any;
  title = "Ecotopia: Cases";

  constructor(private http: HttpClient, private titleService: Title){}

  ngOnInit(): void {
      this.http.get<any[]>('http://localhost:80/outdatedjeepengine')
      .subscribe(outdated_engine =>{
        this.outdated_engine = outdated_engine;
        console.log(outdated_engine);
      })

      this.titleService.setTitle(this.title);
  }
}
