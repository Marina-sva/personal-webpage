import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';


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
export class TestimonialSliderComponent implements AfterViewInit, OnDestroy {
  testimonials: Testimonial[] = [
    {
      name: 'Olena Sadovska',
      role: 'Pflegehelferin · 42',
      avatarWebp: 'assets/images/testimonials/olena-sadovska_512.webp',
      avatarJpg: 'assets/images/testimonials/olena-sadovska_512.jpg',
      quote: 'Mit Margaritas Coaching fand ich meine neue Richtung – heute arbeite ich als Pflegehelferin und erlebe täglich Wirkung. Sie hat mir den Glauben an mich zurückgegeben.'
    },
    {
      name: 'Oleksandr Nikolaiev',
      role: 'Tischler · 39',
      avatarWebp: 'assets/images/testimonials/oleksandr-nikolaiev_512.webp',
      avatarJpg: 'assets/images/testimonials/oleksandr-nikolaiev_512.jpg',
      quote: 'Wir ließen meinen ukrainischen Abschluss anerkennen und ich absolvierte eine Weiterbildung. Das hat meine Chancen am deutschen Arbeitsmarkt stark erhöht.'
    },
    {
      name: 'Anna Usova',
      role: 'Rezeptionistin · 39',
      avatarWebp: 'assets/images/testimonials/anna-usova_512.webp',
      avatarJpg: 'assets/images/testimonials/anna-usova_512.jpg',
      quote: 'Wir haben meinen Werdegang als Hotelkauffrau präzise im CV positioniert und Interviews trainiert. Ergebnis: Traumstelle an der Rezeption in Hamburg.'
    }
  ];

  currentIndex = 0;
  intervalId: any = null;
  autoplay = true;
  intervalMs = 6000;

  ngAfterViewInit(): void {
    if (this.autoplay && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.startAutoplay();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  show(i: number): void {
    this.currentIndex = (i + this.testimonials.length) % this.testimonials.length;
  }

  next(): void {
    this.show(this.currentIndex + 1);
  }

  startAutoplay(): void {
    this.stopAutoplay();
    this.intervalId = setInterval(() => this.next(), this.intervalMs);
  }

  stopAutoplay(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}

