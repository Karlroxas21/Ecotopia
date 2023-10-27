import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-causes',
  templateUrl: './causes.component.html',
  styleUrls: ['./causes.component.css']
})
export class CausesComponent {

  constructor(private titleService: Title){}

  ngOnInit(){
    this.titleService.setTitle("Causes");
  }

}
