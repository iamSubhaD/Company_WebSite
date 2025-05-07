import { Component } from '@angular/core';
import { LanguageService } from '../../services/language/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  currentLang: 'en' | 'de' = 'en';
  buttonLabel = 'Deutsch';

  constructor(private languageService: LanguageService) {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLang = lang;
    });

    this.languageService.translations$.subscribe(data => {
      this.buttonLabel = data.language;
    });
  }

  toggleLang() {
    this.languageService.toggleLanguage();
  }
}
