import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-stories',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './stories.component.html',
  styleUrl: './stories.component.css'
})
export class StoriesComponent {
    currentLanguage: string;

    constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('de');
    this.translate.use('de');
    this.currentLanguage = 'de';
      }
}
