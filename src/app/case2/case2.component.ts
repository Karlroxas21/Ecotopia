import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { environment } from '../../environments/environment'

@Component({
  selector: 'app-case2',
  templateUrl: './case2.component.html',
  styleUrls: ['./case2.component.css']
})
export class Case2Component implements OnInit {
  outdated_engine: any;
  title = "Ecotopia: Cases";

  constructor(private http: HttpClient, private titleService: Title){}

  ngOnInit(): void {
      this.http.get<any[]>(`${environment.apiUrl}outdatedjeepengine`)
      .subscribe(outdated_engine =>{
        this.outdated_engine = outdated_engine;
      })

      this.titleService.setTitle(this.title);
  }
}
