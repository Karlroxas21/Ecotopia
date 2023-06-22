import { Component, OnInit } from '@angular/core';
import SimpleParallax from 'simple-parallax-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
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
