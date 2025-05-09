import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [NgbCarouselModule, CommonModule],
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'] // corrected key from "styleUrl" to "styleUrls"
})
export class IntroComponent {
  slides = [
    {
      backgroundClass: 'bg-slide-1',
      content: [
        { text: 'RAFFOLD', class: 'slide-1-text-1' },
        {
          text: `Ideate Implement Elevate`,
          class: 'slide-1-text-2'
        }
      ]
    },
    {
      backgroundClass: 'bg-slide-2',
      content: [
        { text: 'Our Expertise', class: 'slide-2-text-1' },
        { texts: ['Web Development', 'App Development', 'E-Learning'], class: 'slide-2-expertise' },
        { text2: ['Business Solution', 'Certification', 'Application Support'], class: 'slide-2-expertise' }
      ]
    }
  ];
}
