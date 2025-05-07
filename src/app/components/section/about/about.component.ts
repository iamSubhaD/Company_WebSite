import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../services/language/language.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  translation: any = {};

  constructor(private languageService: LanguageService) {
    this.languageService.translations$.subscribe(data => this.translation = data.about || {});
  }
}
