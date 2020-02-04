import { Injectable } from '@angular/core';
import { Account } from '../interfaces/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

   
  loggedInUser: Account;
  userAccounts: Account[] = [{
    userName: 'bisola',
    password: 'bisola'

  }

];

  constructor() { }

  checkDetail(userName: string, password: string): boolean {
    // this.loggedInUser.userName = userName;
    let result = false;
    if (userName === this.userAccounts[0].userName) {
      if (password === this.userAccounts[0].password) {
        result = true;
      }
    }
    return result;
    // return userName === this.userPasswords[0].userName ? (password === this.userPasswords[0].password ? true : false) : false;
  }
}
