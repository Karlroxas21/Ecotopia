import { Component, OnInit } from '@angular/core';
import SimpleParallax from 'simple-parallax-js';
import { Router } from '@angular/router';
import { ElementRef, Renderer2, HostListener } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
    this.adjustParallax();
  }
  scrollY = 0;

  @HostListener('window:scroll', [''])
  
  onScroll(): void {
    this.adjustParallax();
    this.scrollY = window.scrollY;
  }

  adjustParallax() {
    const scrollY = window.scrollY;
    const windowWidth = window.innerWidth;
    const sea = this.el.nativeElement.querySelector('#sea');
    const boy = this.el.nativeElement.querySelector('#boy');
    const water = this.el.nativeElement.querySelector('#water');
    const oldman = this.el.nativeElement.querySelector('#oldman');
    // const boy = this.el.nativeElement.querySelector('#boy');
    const screenWidthThreshold = 768;

    // const trash = this.el.nativeElement.querySelector('#trash');
    // if (trash) {
    //   const offsetY = -100;
    //   this.renderer.setStyle(trash, 'transform', `translateY(-${(scrollY - offsetY) * 0.2}px)`);
    // }
    
    const bottle = this.el.nativeElement.querySelector('#bottle');
    if (bottle) {
      const offsetY = -100;
      this.renderer.setStyle(bottle, 'transform', `translatex(-${(scrollY - offsetY) * 0.2}px)`);
    }
    
    const papershred = this.el.nativeElement.querySelector('#papershred');
    if (papershred) {
      const offsetY = 50;
      this.renderer.setStyle(papershred, 'transform', `translatex(${(scrollY - offsetY) * 0.2}px)`);
    }
    

    if (window.innerWidth >= screenWidthThreshold) {
      // Apply the effect for the 'boy' element
      let initialOffsetBoy = -100;
      if (scrollY > 0) {
        initialOffsetBoy += scrollY * 0.3;
      }
      if (boy) {
        this.renderer.setStyle(boy, 'transform', `translateY(-${initialOffsetBoy}px)`);
      }
    
      // Apply the effect for the 'water' element
      if (water) {
        let initialOffsetWaterY = -100;
        let initialOffsetWaterX = -150;
        if (scrollY > 0) {
          initialOffsetWaterY += scrollY * 0.3;
          initialOffsetWaterX += scrollY * 0.9;
        }
        this.renderer.setStyle(water, 'transform', `translateY(${initialOffsetWaterY}px) translateX(${initialOffsetWaterX}px)`);
      }
    } else {

      // Apply a different effect for the 'boy' element on mobile screens
      if (boy) {
        let mobileOffsetBoy = 400;
        if (scrollY > 0) {
          mobileOffsetBoy += scrollY * 0.3;
        }
        this.renderer.setStyle(boy, 'transform', `translateY(-${mobileOffsetBoy}px)`);
      }
    
      // Apply a different effect for the 'water' element on mobile screens
      if (water) {
        let mobileOffsetWater = -150;
        if (scrollY > 0) {
          mobileOffsetWater += scrollY * 0.3;
        }
        this.renderer.setStyle(water, 'transform', `translateY(${mobileOffsetWater}px)`);
      }
    }
    

    const text = this.el.nativeElement.querySelector('#text');
    if (text) {
      this.renderer.setStyle(text, 'transform', `translateY(-${scrollY * 0.3}px)`);
    }

    const man = this.el.nativeElement.querySelector('#man');
    if (man) {
      this.renderer.setStyle(man, 'transform', `translateX(-${scrollY * 0.3}px)`);
    }

    // Move m1 to the left and m2 to the right
    const m1 = this.el.nativeElement.querySelector('#m1');
    if (m1) {
      this.renderer.setStyle(m1, 'transform', `translateX(${scrollY * 0.3}px)`);
    }

    const m2 = this.el.nativeElement.querySelector('#m2');
    if (m2) {
      this.renderer.setStyle(m2, 'transform', `translateX(${scrollY * 0.3}px)`);
    }

    // Move t1 to the right and t2 to the left
    const t1 = this.el.nativeElement.querySelector('#t1');
    if (t1) {
      this.renderer.setStyle(t1, 'transform', `translateY(${scrollY * 0.3}px)`);
    }

    const t2 = this.el.nativeElement.querySelector('#t2');
    if (t2) {
      this.renderer.setStyle(t2, 'transform', `translateX(-${scrollY * 0.3}px)`);
    }
    
    const plants = this.el.nativeElement.querySelector('#plants');
    if (plants) {
      this.renderer.setStyle(plants, 'transform', `translateX(-${scrollY * 0.3}px)`);
    }

    if (window.innerWidth >= screenWidthThreshold) {
      // Apply the parallax effect for desktop screens
      let initialOffsetSea = -800;
      if (scrollY > 0) {
        initialOffsetSea += scrollY * 0.1;
      }
      if (sea) {
        this.renderer.setStyle(sea, 'transform', `translateX(${initialOffsetSea}px)`);
      }

      // let initialOffsetBoy = -100;
      // if (scrollY > 0) {
      //   initialOffsetBoy += scrollY * 0.2;
      // }
      // if (boy) {
      //   this.renderer.setStyle(boy, 'transform', `translateY(-${initialOffsetBoy}px)`);
      // }
      
  
    //   let initialOffsetOldman = -1200;
    //   if (scrollY > 0) {
    //     initialOffsetOldman += scrollY * 0.3;
    //   }
    //   if (oldman) {
    //     this.renderer.setStyle(oldman, 'transform', `translateX(-${initialOffsetOldman}px)`);
    //   }
    // } else {
      // Apply a different effect for mobile screens to sea
    if (sea) {
      let mobileOffsetSea = -600;
      if (scrollY > 0) {
        mobileOffsetSea += scrollY * 0.1;
      }
      this.renderer.setStyle(sea, 'transform', `translateX(${mobileOffsetSea}px)`);
    }
   }
  }


  ngAfterViewInit(){
    const scene1 = document.getElementsByClassName('parallax-1');
    const parallaxInstance1 = new SimpleParallax(scene1, {
      delay: .9,
	    transition: 'cubic-bezier(0,0,0,1)',
    });

    const scene3 = document.getElementsByClassName('parallax-3');
    const parallaxInstance3 = new SimpleParallax(scene3, {
      orientation: 'right'
    });

    const scene4 = document.getElementsByClassName('parallax-4');
    const parallaxInstance4 = new SimpleParallax(scene4, {
      orientation: 'right'
    });
    
    const scene5 = document.getElementsByClassName('parallax-4-1');
    const parallaxInstance5 = new SimpleParallax(scene5, {
      orientation: 'left'
    });

  }
}
