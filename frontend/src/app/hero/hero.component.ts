import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
      currentLanguage: string;

      constructor(private translate: TranslateService) {
      this.translate.setDefaultLang('de');
      this.translate.use('de');
      this.currentLanguage = 'de';
        }

}
