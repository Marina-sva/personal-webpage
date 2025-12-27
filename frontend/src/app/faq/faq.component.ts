import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
      currentLanguage: string;

      constructor(private translate: TranslateService) {
      this.translate.setDefaultLang('de');
      this.translate.use('de');
      this.currentLanguage = 'de';
      }

}
