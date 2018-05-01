import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule, ActivatedRoute,CanActivate, CanActivateChild } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AdminFeedComponent } from './feedback/admin-feed/admin-feed.component';
import { StudentFeedComponent } from './feedback/student-feed/student-feed.component';
import { TeacherFeedComponent } from './feedback/teacher-feed/teacher-feed.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionsComponent } from './feedback/student-feed/questions/questions.component';

import { AuthGuard } from './auth/auth.guard';



const routes : Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'student', component: StudentFeedComponent },
  { path: 'admin', component: AdminFeedComponent, canActivate: [AuthGuard] },
  { path: 'teacher', component: TeacherFeedComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'home', component: WelcomeComponent },
  { path : '' , redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
  providers:[ 
    AuthGuard 
  ] //Auth guard is injected as a service by angular and has to be provided. Has to be provided in app.module. But in this special case it is provided in this module
})
export class AppRoutingModule { }
