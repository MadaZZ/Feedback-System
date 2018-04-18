import { Injectable } from '@angular/core';

@Injectable()
export class AdminService {

  constructor() { }

  id = 'AD123';
  password = 'password';

  check(id: any, password: any)
  {
    if(id == this.id && password == this.password)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

}
