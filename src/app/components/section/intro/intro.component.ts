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
        { text: 'Ideate Implement Elevate', class: 'slide-1-text-1' },
        // {
        //   text: `We transform business through cutting-edge technology management, combining a Stoic<br> mindset with management consulting skillset and deep tech expertise`,
        //   class: 'slide-1-text-2'
        // }
      ]
    },
    {
      backgroundClass: 'bg-slide-2',
      content: [
        { text: 'Angular Projects with Custom Layouts', class: 'slide-2-text-1' }
      ]
    }
  ];
}
