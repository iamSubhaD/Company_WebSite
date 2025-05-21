import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../services/language/language.service';

@Component({
  selector: 'app-client-feedback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-feedback.component.html',
  styleUrl: './client-feedback.component.css'
})
export class ClientFeedbackComponent {
  translation: any = {};

  constructor(private languageService: LanguageService) {
    this.languageService.translations$.subscribe(data => this.translation = data.clientFeedback || {});
  }

}
