import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  currentLang: 'en' | 'de' = 'en';
  flagSrc = 'assets/flags/en.png';
  translation: any = {};

  constructor(private languageService: LanguageService) {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLang = lang;
      this.flagSrc = this.getFlagPath(lang);
    });

    this.languageService.translations$.subscribe(data => this.translation = data.header || {});

  }

  toggleLang() {
    this.languageService.toggleLanguage();
  }

  private getFlagPath(lang: 'en' | 'de'): string {
    return `assets/flags/${lang}.png`;
  }

  scrollTo(sectionId: string): void {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

}
