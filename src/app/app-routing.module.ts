import { AboutComponent } from './about/about/about.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: 'profile', component: ProfileComponent},
  { path: 'about', component: AboutComponent},

  { path: '', redirectTo:"/goals", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }