import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Title } from '@angular/platform-browser';
import SimpleParallax from 'simple-parallax-js';


@Component({
  selector: 'app-landing-page-new',
  templateUrl: './landing-page-new.component.html',
  styleUrls: ['./landing-page-new.component.css'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms', style({ transform: 'translateX(0)' })),
      ]),
    ]),
  ],
})
export class LandingPageNewComponent implements OnInit{
  scale: number = 1;
  imageUrl: string = 'assets/landingpagenew/parallaxtop/ext.jpg'; 
  scrollY = 0;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    this.scrollY = window.scrollY;

    this.scale = 1 + (window.scrollY / 500);
    if (this.scale < 1) this.scale = 1;
    
  }


  currentIndex: number = 0;
  isSmaller: boolean = false;
  images: string[] = [
    'assets/carousel/1.png',
    'assets/carousel/2.png',
    'assets/carousel/3.png',
    'assets/carousel/4.png',
    'assets/carousel/5.png'
    // 'assets/landingpagenew/targetgoals.png'
  ];
  // descriptions: string[] = [
  //   'Description for Image 1',
  //   'Description for Image 2',
  //   'Description for Image 3'
  // ];

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.startSlider();

  }

  startSlider() {
    setInterval(() => {
      this.nextSlide();
    }, 9000);
  }

  nextSlide() {
    this.isSmaller = true;
    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.isSmaller = false;
    }, 500); 
  }

  prevSlide() {
    this.isSmaller = true;
    setTimeout(() => {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      this.isSmaller = false;
    }, 500); 
  }

  getSlideStyle() {
    return {
      transform: this.isSmaller ? 'scale(0.8)' : 'scale(1)'
    };
  }

  ngAfterViewInit() {
    // Initialize parallax effect for each section
    const parallaxElements = document.querySelectorAll('.scrolling-title');
    const parallaxElements2 = document.querySelectorAll('.scrolling-title2');
    
    parallaxElements.forEach(element => {
      new SimpleParallax(element, {
        orientation: 'right', // or 'left' for leftward movement
        scale: 1.5, // Adjust the scale value as needed for the desired parallax effect
        delay: 0.6, // Adjust the delay value as needed
        transition: 'cubic-bezier(0.68,-0.55,0.27,1.55)' // Customize the transition
      });
    });

    parallaxElements2.forEach(element => {
      new SimpleParallax(element, {
        orientation: 'left', // or 'left' for leftward movement
        scale: 1.5, // Adjust the scale value as needed for the desired parallax effect
        delay: 0.6, // Adjust the delay value as needed
        transition: 'cubic-bezier(0.68,-0.55,0.27,1.55)' // Customize the transition
      });
    });
  }
}




