import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from '../admin.service';
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
    private adser: AdminService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  submit(form: NgForm){
    var id = form.value.id;
    var password = form.value.password;
    var user = form.value.user;

    let data =
    {
      "id" : id,
      "password" : password
    } ;

    if(user == 'Admin')
    {
     
      if(this.adser.check(id,password))
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
      this.http.post('http://localhost:3000/api/student', data, { observe: 'response' })
      .subscribe(response => {
        let status = response.status;
        console.log(response);
        if(response.body != null)
         this.router.navigate(['/student'], { fragment: 'top' });
        else 
        alert("Enter valid id and password");
      }, error => {
        console.log("Error is there " + error);
        alert(`Error is there ${error.error.message}`);
      });
    }

    else
    {
      this.http.post('http://localhost:3000/api/student', data, { observe: 'response' })
      .subscribe(response => {
        let status = response.status;
        console.log(response);
        if(response.body != null)
         this.router.navigate(['/student'], { fragment: 'top' });
        else 
        alert("Enter valid id and password");
      }, error => {
        console.log("Error is there " + error);
        alert(`Error is there ${error.error.message}`);
      });
    }
  
  }

}
