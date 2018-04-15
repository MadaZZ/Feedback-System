import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes : Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: '', component: WelcomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
