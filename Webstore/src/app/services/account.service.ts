import { Injectable } from '@angular/core';
import { Account } from '../interfaces/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

   
  loggedInUser: Account;
  userAccounts: Account[] = [{
    name: 'bisola awujoola',
    userName: 'bisola',
    password: 'bisola',
    address: '123 Main Street, Stockton, CA',
    phoneno: '209 999 9999',
    email: 'b@yahoo.com'
  },
  {
    name: 'Mary Jones',
    userName: 'mary',
    password: 'mary',
    address: '456 Main Street, Stockton, CA',
    phoneno: '209 888 8888',
    email: 'mary@yahoo.com'
  },

  {
    name: 'Kevin Smith',
    userName: 'kevin',
    password: 'kevin',
    address: '789 Main Street, Stockton, CA',
    phoneno: '209 777 7777',
    email: 'kevin@yahoo.com'
  }

];

  constructor() { }

  checkDetail(userName: string, password: string): boolean {
    // this.loggedInUser.userName = userName;
    let result = false;
    for ( let i=0; i< this.userAccounts.length;i++)  {
    if (userName === this.userAccounts[i].userName) {
      if (password === this.userAccounts[i].password) {
        result = true;
      }
    }
  }
    return result;
    // return userName === this.userPasswords[0].userName ? (password === this.userPasswords[0].password ? true : false) : false;
  }
}
