import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileComponent } from './profile/profile/profile.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { AboutComponent } from './about/about/about.component';





@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavbarComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
