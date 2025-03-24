import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as http from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MenComponent } from './men/men.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    http.HttpClientModule,
    HeaderComponent, // Import HeaderComponent instead of declaring it
    AppComponent, // Import AppComponent instead of declaring it
    HomeComponent, // Import HomeComponent instead of declaring it
    FooterComponent, // Import FooterComponent instead of declaring it
    MenComponent, // Import MenComponent instead of declaring it
    RouterModule
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule { }