import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  
  constructor( 
    private adser: AdminService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submit(form: NgForm){
    const id = form.value.email;
    const password = form.value.password;
    const user = form.value.user;
    // //console.log(form.value.email);
    // console.log(form.value.password);
    // console.log(form.value.user);
    if(user == 'Admin')
    {
      if(this.adser.check(id,password))
      {
        this.router.navigate(['/admin']);
      }
      else
      {
        alert("Enter valid email and password");
        //this.router.navigate(['/login']);
      }
    }
  }

}
