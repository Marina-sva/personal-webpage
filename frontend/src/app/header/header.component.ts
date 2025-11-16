import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  currentLanguage: string;
  dropdownOpen = false;

  constructor(private translate: TranslateService) {
    this.currentLanguage = translate.getDefaultLang() || 'de';
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLanguage = lang;
    this.dropdownOpen = false;

  }
}
