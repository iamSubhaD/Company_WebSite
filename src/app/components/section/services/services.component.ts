import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../services/language/language.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import { faChalkboardUser } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  currentIndex = 0;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faCode=faCode;
  faLaptopCode = faLaptopCode;
  faSearchengin = faSearchengin;
  faMobileScreen = faMobileScreen;
  faChalkboardUser = faChalkboardUser;
  faBriefcase = faBriefcase;

  translation: any = {};

  constructor(private languageService: LanguageService) {
    this.languageService.translations$.subscribe(data => this.translation = data.services || {});
  }
}
