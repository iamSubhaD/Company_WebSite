import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [NgbCarouselModule, CommonModule],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent {
  slides = [
    {
      background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
      content: {
        text: 'Ideate Implement Elevate',
        style: {
          color: 'black',
          'font-weight': 600,
          'font-family':'"Geist", "Geist Placeholder", sans-serif;',
          'font-size': '50px',
          padding: '20px',
          // 'background-color': 'rgba(0,0,0,0.5)',
          'border-radius': '10px',
          // 'max-width': '60%',
          'text-align': 'center',
          animation: 'fadeInOut 4s ease-in-out infinite' // Fade in and out loop
        }
      }
    },
    {
      background: 'radial-gradient(circle,rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%)',
      content: {
        text: 'Angular Projects with Custom Layouts',
        style: {
          color: '#fff',
          'font-size': '24px',
          'background-color': '#00000066',
          padding: '30px',
          'border-left': '5px solid yellow',
          'text-align': 'left'
        }
      }
    }
  ];
  
  
  
}
