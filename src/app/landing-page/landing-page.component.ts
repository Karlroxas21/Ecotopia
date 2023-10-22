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
      this.renderer.setStyle(t1, 'transform', `translateX(${scrollY * 0.3}px)`);
    }

    const t2 = this.el.nativeElement.querySelector('#t2');
    if (t2) {
      this.renderer.setStyle(t2, 'transform', `translateX(-${scrollY * 0.3}px)`);
    }
  }


  ngAfterViewInit(){
    const scene1 = document.getElementsByClassName('parallax-1');
    const parallaxInstance1 = new SimpleParallax(scene1, {
      delay: .6,
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
