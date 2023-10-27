import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-effects',
  templateUrl: './effects.component.html',
  styleUrls: ['./effects.component.css']
})
export class EffectsComponent {

  constructor(private titleService: Title){}

  ngOnInit(){
    this.titleService.setTitle("Causes");
  }

}
