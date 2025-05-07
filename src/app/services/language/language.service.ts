import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private languageSource = new BehaviorSubject<'en' | 'de'>('en');
  currentLanguage$ = this.languageSource.asObservable();

  private translations = new BehaviorSubject<any>({});
  translations$ = this.translations.asObservable();

  constructor(private http: HttpClient) {
    this.loadTranslations('en');
  }

  toggleLanguage(): void {
    const newLang = this.languageSource.value === 'en' ? 'de' : 'en';
    this.languageSource.next(newLang);
    this.loadTranslations(newLang);
  }

  get currentLang(): 'en' | 'de' {
    return this.languageSource.value;
  }

  private loadTranslations(lang: 'en' | 'de'): void {
    const filePath = `assets/i18n/${lang}.json`;
    this.http.get(filePath).subscribe(
      data => this.translations.next(data),
      error => console.error(`Translation file not found: ${filePath}`, error)
    );
  }
}
