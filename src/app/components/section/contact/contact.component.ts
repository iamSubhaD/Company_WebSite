import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../services/language/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  faLocationDot = faLocationDot;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faLinkedin = faLinkedin;
  linkedinUrl = 'https://www.linkedin.com/';
  faFacebook = faFacebook;
  facebookUrl = 'https://www.facebook.com/';
  faInstagram = faInstagram;
  InstagramUrl = 'https://www.instagram.com/';
  translation: any = {};

  constructor(private languageService: LanguageService) {
    this.languageService.translations$.subscribe(data => this.translation = data.contact || {});
  }


}
