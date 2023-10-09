import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-current-issue',
  templateUrl: './current-issue.component.html',
  styleUrls: ['./current-issue.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 5000, noPause: true, showIndicators: true } }
  ]
})
export class CurrentIssueComponent {
  // isFirstOpen = true;
  // oneAtATime = true;

  current_issues_ph: any;
  title = "Ecotopia: Current Issues in the Philippines";

  constructor(private http: HttpClient,
    private titleService: Title) { }

  ngOnInit(): void{
    this.http.get<any[]>('/currentIssue')
    .subscribe(incoming_data => {
      this.current_issues_ph = incoming_data;
    });

    this.titleService.setTitle(this.title);
  }

  selectedTab: string = 'tab1';

  selectTab(tab: string) {
    this.selectedTab = tab;
  }
}
