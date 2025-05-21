import { Component } from '@angular/core';
import { HeaderComponent } from "../components/header/header.component";
import { AboutComponent } from "../components/section/about/about.component";
import { ServicesComponent } from "../components/section/services/services.component";
import { ContactComponent } from "../components/section/contact/contact.component";
import { BlogComponent } from "../components/section/blog/blog.component";
import { FooterComponent } from "../components/footer/footer.component";
import { IntroComponent } from "../components/section/intro/intro.component";
import { ClientFeedbackComponent } from "../components/section/client-feedback/client-feedback.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, AboutComponent, ServicesComponent, ContactComponent, BlogComponent, FooterComponent, IntroComponent, ClientFeedbackComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
