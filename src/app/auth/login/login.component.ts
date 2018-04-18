import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  
  constructor() { }

  ngOnInit() {
  }

  submit(form: NgForm){
    console.log(form.value.email);
    console.log(form.value.password);
    console.log(form.value.user);
  }

}
