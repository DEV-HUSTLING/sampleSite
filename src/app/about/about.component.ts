import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  slides: HTMLElement[] = [];
  currentIndex: number = 0;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.slides = Array.from(this.elementRef.nativeElement.querySelectorAll('.slide'));
  this.showSlide(this.currentIndex);
  }

  @HostListener('document:wheel', ['$event'])
  handleScroll(event: WheelEvent) {
    clearTimeout(this.scrollTimeout);
  
    this.scrollTimeout = setTimeout(() => {
      if (event.deltaY > 0 && this.currentIndex < this.slides.length - 1) {
        // Scrolling down
        this.currentIndex++;
        this.showSlide(this.currentIndex);
      } else if (event.deltaY < 0 && this.currentIndex > 0) {
        // Scrolling up
        this.currentIndex--;
        this.showSlide(this.currentIndex);
      }
    }, 35); // Debounce time in milliseconds
  }
  
  private scrollTimeout: any;
  

  

  showSlide(index: number) {
    this.slides.forEach((slide, i) => {
      if (i === index) {
        this.renderer.addClass(slide, 'active');
      } else {
        this.renderer.removeClass(slide, 'active');
      }
    });
  }
  
}
