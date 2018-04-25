import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }
  admin =
  {
    id: 'AD123',
    password: 'password'
  }
  private class;
  public checkAdmin(id: any, pass: any) {
    if (id == this.admin.id && pass == this.admin.password) {
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
}
