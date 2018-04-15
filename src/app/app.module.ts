import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';//Imported to use animations
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AppRoutingModule } from './/app-routing.module';
import { MaterialModule } from './material/material.module';
import { StudentFeedComponent } from './feedback/student-feed/student-feed.component';
import { TeacherFeedComponent } from './feedback/teacher-feed/teacher-feed.component';
import { AdminFeedComponent } from './feedback/admin-feed/admin-feed.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SidenavComponent,
    FeedbackComponent,
    StudentFeedComponent,
    TeacherFeedComponent,
    AdminFeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
