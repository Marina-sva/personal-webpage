import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialSliderComponent } from './testimonial-slider/testimonial-slider.component';
import { TimelineComponent } from './timeline/timeline.component';
import { StoriesComponent } from './stories/stories.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HeaderComponent,
    HeroComponent,
    AboutMeComponent,
    ServicesComponent,
    TestimonialSliderComponent,
    TimelineComponent,
    StoriesComponent,
    FaqComponent,
    ContactComponent,
    FooterComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
