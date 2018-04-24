import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }
  admin = 
  {
    id: 'AD123',
    password: 'password'
  }

  student = 
  {
    id: 'ST123',
    password: 'password'
  }

  teacher = 
  {
    id: 'TE123',
    password: 'password'
  }

  check(id: any, pass: any)
  {
    if(id == this.admin.id && pass == this.admin.password)
    {
      return true;
    }
    else if( id == this.teacher.id && pass == this.teacher.password )
    { 
      return true;
    }
    else if( id == this.student.id && pass == this.student.password )
    { 
      return true;
    }
    else
    {
      return false;  
    }

  }

}
