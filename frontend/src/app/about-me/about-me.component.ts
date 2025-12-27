import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
    currentLanguage: string;

    constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('de');
    this.translate.use('de');
    this.currentLanguage = 'de';
    }

}
