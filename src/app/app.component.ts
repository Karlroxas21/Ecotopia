import { Component, HostListener } from '@angular/core';
import * as AOS from 'aos';
import { Scenes } from 'phaser';
import SimpleParallax from 'simple-parallax-js';
import { Router, NavigationEnd } from '@angular/router';

// interface SideNavToggle{
//   screenWidth: number;
//   collapsed: boolean;
// }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecotopia-capstone';
  hideNavbar = false;
  hideNavbarPages = ['/admin-currentissue', '/admin-cases']; // Add all admin pages here

  constructor(private router: Router){
    router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        this.checkHideNavbar(event.url);
      }
    });
  }

  private checkHideNavbar(url: string): void{
    this.hideNavbar = this.hideNavbarPages.includes(url);
  }

  ngAfterViewInit(){
     const scene = document.getElementsByClassName('thumbnail');
     const parallaxInstance = new SimpleParallax(scene, {
     
     })
   }
  ngOnInit(){
    AOS.init();
    window.addEventListener('load',AOS.refresh)
  }

  closeNavbar() {
    const checkbox = document.getElementById('check') as HTMLInputElement;
    checkbox.checked = false;
  }

  isSideNavCollapsed = false;
  screenWidth = 0;

  // onToggleSideNav(data: SideNavToggle): void{
  //   this.screenWidth = data.screenWidth;
  //   this.isSideNavCollapsed = data.collapsed;
  // }

  navbarfixed:boolean = false;

  @HostListener('window:scroll', ['$event']) onscroll(){
    if(window.scrollY > 100){
      this.navbarfixed = true;
    } else{
      this.navbarfixed = false;
    }
  }
}

