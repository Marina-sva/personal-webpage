import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';


interface Testimonial {
  name: string;
  role: string;
  avatarWebp: string;
  avatarJpg: string;
  quote: string;
}

@Component({
  selector: 'app-testimonial-slider',
  templateUrl: './testimonial-slider.component.html',
  styleUrls: ['./testimonial-slider.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class TestimonialSliderComponent implements  OnInit {
  testimonials: Testimonial[] = [];
  currentIndex = 0;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.loadTestimonials();
    this.translate.onLangChange.subscribe(() => {
      this.loadTestimonials();
    });
  }

  loadTestimonials() {
    this.translate.get('testimonials').subscribe((data: Testimonial[]) => {
      this.testimonials = data;
    });
  }

  show(index: number) {
    this.currentIndex = index;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  startAutoplay() {
  }

  stopAutoplay() {

  }
}
