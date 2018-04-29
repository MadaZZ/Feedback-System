import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AuthService {

  authChange = new Subject<String>();//Sends data onChange

  constructor() { }
  admin =
  {
    id: 'AD123',
    password: 'password'
  }
  private class;
  private teacher;
  
  public checkAdmin(id: any, pass: any) {
    if (id == this.admin.id && pass == this.admin.password) {
      this.authChange.next("Admin");
      return true;
    }
    else {
      return false;
    }
  }

 

  public setClass(Class: any) {
    this.class = Class;
  }

  public getClass() {
    return this.class;
  }

  public setTeacher(name)
  {
    this.teacher = name;
  }

  public getTeacher()
  {
    return this.teacher;
  }
}
