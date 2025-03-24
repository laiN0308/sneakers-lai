import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterOutlet } from '@angular/router';
import { MenComponent } from "./men/men.component";
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
/**
 * The main component of the Sneakers application.
 * This component serves as the root component for the app.
 */
export class AppComponent {
  title = 'sneakers';
}
