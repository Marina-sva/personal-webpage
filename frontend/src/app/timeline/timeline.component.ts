import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {
    currentLanguage: string;

     constructor(private translate: TranslateService) {
       this.translate.setDefaultLang('de');
       this.translate.use('de');
       this.currentLanguage = 'de';
       }

}
