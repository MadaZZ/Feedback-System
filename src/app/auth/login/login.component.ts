import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  
  constructor( 
    private auser: AuthService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  submit(form: NgForm){
    var id = form.value.id;
    var password = form.value.password;
    var user = form.value.user;

    if(user == 'Admin')
    {
     
      if(this.auser.check(id,password))
      {
        this.router.navigate(['/admin']);
      }
      else
      {
        alert("Enter valid email and password");
      }
    
    }

    else if(user == 'Teacher')
    {

      if(this.auser.check(id,password))
      {
        this.router.navigate(['/Teacher']);
      }
      else
      {
        alert("Enter valid email and password");
      }

    }

    else
    {
      if(this.auser.check(id,password))
      {
        this.router.navigate(['/student']);
      }
      else
      {
        alert("Enter valid email and password");
      }
    }
  
  }

}
