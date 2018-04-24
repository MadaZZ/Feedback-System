import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AdminFeedComponent } from './feedback/admin-feed/admin-feed.component';
import { StudentFeedComponent } from './feedback/student-feed/student-feed.component';
import { TeacherFeedComponent } from './feedback/teacher-feed/teacher-feed.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes : Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'student', component: StudentFeedComponent },
  { path: 'admin', component: AdminFeedComponent },
  { path: 'teacher', component: TeacherFeedComponent },
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
