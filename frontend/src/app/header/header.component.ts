import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

declare var bootstrap: any;


@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  imports: [CommonModule, TranslateModule],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  closeMenu() {
    const menu = document.getElementById('mainmenu');
    if (menu) {
      const bsCollapse = bootstrap.Collapse.getInstance(menu);
      bsCollapse?.hide();
    }
  }

  currentLanguage: string;

  constructor(private translate: TranslateService) {
  this.translate.setDefaultLang('de');
  this.translate.use('de');
  this.currentLanguage = 'de';

   }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLanguage = lang;

  }
}
