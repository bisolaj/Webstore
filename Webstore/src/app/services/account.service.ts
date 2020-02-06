import { Injectable } from '@angular/core';
import { Account } from '../interfaces/Account';

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

  checkIfUserExists(userName: string): boolean {
    //going to search for username
    //console.log(this.userPasswords.find(x => userName.toLowerCase() === x.userName));
    let result = false;
    if (this.userAccounts.find(x => userName.toLowerCase() === x.userName) !== undefined) {
      result = true;
    }
    return result;
  }

  addUser(userAccount: Account) {
    //const userAccount : User = {
      //userName: uN.toLowerCase(),
      //password: pN
    //};
    this.userAccounts.push(userAccount);
    //only needed for writing to local storage
    //localStorage.setItem('users',JSON.stringify(this.userAccounts));

}


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
