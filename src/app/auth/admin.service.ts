import { Injectable } from '@angular/core';


@Injectable()
export class AdminService {

  constructor() { }

  id = 'AD123';
  password = 'password';

  check(id: any, pass: any)
  {

    console.log(id);
    console.log(pass);
    if(id == this.id && pass == this.password)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

}
