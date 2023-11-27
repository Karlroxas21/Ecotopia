import { Component, HostListener } from '@angular/core';
import { Scenes } from 'phaser';
import SimpleParallax from 'simple-parallax-js';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title = 'ecotopia-capstone';
  hideNavbar = false;
  hideNavbarPages = ['/admin-currentissue', '/admin-cases', '/admin-case-1', 
  '/admin-case-2', '/admin-case-3', '/admin-case-4', 
  '/adminpanel', '/admin-solution-1', '/admin-solution-2', '/admin-solution-3', '/admin-solutions',
  '/admin-current-issues-ph', '/login', '/admin-assessment', '/admin-news', '/admin-account-create', 
  '/admin-account-create/*', '/not-authorized']; // Add all admin pages here

  constructor(private router: Router){
    router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        this.checkHideNavbar(event.url);
      }
    });
  }

  private checkHideNavbar(url: string): void{
    this.hideNavbar = this.hideNavbarPages.some(page => url.startsWith(page));
  }

  // private checkHideNavbar(url: string): void {
  //   if (url === '/**') {
  //     this.hideNavbar = true; // Hide the navbar for the 404 page
  //   } else {
  //     this.hideNavbar = this.hideNavbarPages.includes(url);
  //   }
  // }

  ngAfterViewInit(){
     const scene = document.getElementsByClassName('thumbnail');
     const parallaxInstance = new SimpleParallax(scene, {
     
     })
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
  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling when the menu is open
    } else {
      document.body.style.overflow = 'auto'; // Restore scrolling when the menu is closed
    }
  }
  
}
