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
export class TestimonialSliderComponent implements OnInit {
  testimonials: Testimonial[] = [];
  currentIndex = 0;
    intervalId: any = null;

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
    if (!this.testimonials.length) return;
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prev() {
    if (!this.testimonials.length) return;
    this.currentIndex =
      (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  startAutoplay() {
    this.stopAutoplay();
    this.intervalId = setInterval(() => {
      this.next();
    }, 5000);
  }

  stopAutoplay() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private startX = 0;

  onTouchStart(event: TouchEvent) {
    this.startX = event.touches[0].clientX;
  }

  onTouchEnd(event: TouchEvent) {
    const endX = event.changedTouches[0].clientX;
    const diff = endX - this.startX;

    if (Math.abs(diff) > 50) {
      diff < 0 ? this.next() : this.prev();
    }
  }

onClick(event: MouseEvent) {
  const slider = event.currentTarget as HTMLElement;
  const rect = slider.getBoundingClientRect();
  const clickX = event.clientX - rect.left;

  if (clickX < rect.width / 2) {
    this.prev();
  } else {
    this.next();
  }
}
}
