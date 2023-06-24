import { Component } from '@angular/core';
import * as AOS from 'aos';
import { Scenes } from 'phaser';
import SimpleParallax from 'simple-parallax-js';

//interface SideNavToggle{
  //screenWidth: number;
  //collapsed: boolean;
//}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecotopia-capstone';

  // ngAfterViewInit(){
  //   const scene = document.getElementsByClassName('thumbnail');
  //   const parallaxInstance = new SimpleParallax(scene, {
     
  //   })
  // }
  ngOnInit(){
    AOS.init();
    window.addEventListener('load',AOS.refresh)
  }

  closeNavbar() {
    const checkbox = document.getElementById('check') as HTMLInputElement;
    checkbox.checked = false;
  }

  //isSideNavCollapsed = false;
  //screenWidth = 0;

  //onToggleSideNav(data: SideNavToggle): void{
   // this.screenWidth = data.screenWidth;
   // this.isSideNavCollapsed = data.collapsed;
 // }
}

