import { Injectable } from '@angular/core';

const IS_LOGGED_IN = 'isLoggedIn';

@Injectable()
export class AuthenticationService {

  private sessionStorage = sessionStorage;

  constructor() {}

  // this should be some call to the backend and return user model
  login(username: string, password: string) {
    if (username.length >= 5 && password.length >= 8 && password.match('[A-Z]+') !== null &&
      password.match('[a-z]+') !== null && password.match('[0-9]+') !== null) {
      this.sessionStorage.setItem(IS_LOGGED_IN, JSON.stringify(true));
      return true;
    }
    return false;
  }

  isLoggedIn() {
    return this.sessionStorage.getItem(IS_LOGGED_IN);
  }

  logout() {
    this.sessionStorage.removeItem(IS_LOGGED_IN);
  }
}
