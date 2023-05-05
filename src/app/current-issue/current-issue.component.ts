import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-current-issue',
  templateUrl: './current-issue.component.html',
  styleUrls: ['./current-issue.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 5000, noPause: true, showIndicators: true } }
  ]
})
export class CurrentIssueComponent {
  isFirstOpen = true;
  oneAtATime = true;
}
