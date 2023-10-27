import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-evidence',
  templateUrl: './evidence.component.html',
  styleUrls: ['./evidence.component.css']
})
export class EvidenceComponent {

  constructor(private titleService: Title){}

  ngOnInit(){
    this.titleService.setTitle("Evidence");
  }

}
