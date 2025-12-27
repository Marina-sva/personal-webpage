import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  currentLanguage: string;

   constructor(private translate: TranslateService) {
     this.translate.setDefaultLang('de');
     this.translate.use('de');
     this.currentLanguage = 'de';
     }

}
