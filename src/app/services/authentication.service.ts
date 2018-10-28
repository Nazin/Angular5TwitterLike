import {EventEmitter, Injectable, Output} from '@angular/core';

const IS_LOGGED_IN = 'isLoggedIn';

@Injectable()
export class AuthenticationService {

  private sessionStorage = sessionStorage;

  @Output() loginEvent: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  // this should be some call to the backend and return user model
  login(username: string, password: string) {
    if (username.length >= 5 && password.length >= 8 && password.match('[A-Z]+') !== null &&
      password.match('[a-z]+') !== null && password.match('[0-9]+') !== null) {
      this.sessionStorage.setItem(IS_LOGGED_IN, JSON.stringify(true));
      this.loginEvent.emit(true);
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return JSON.parse(this.sessionStorage.getItem(IS_LOGGED_IN));
  }

  logout() {
    this.sessionStorage.removeItem(IS_LOGGED_IN);
    this.loginEvent.emit(false);
  }
}
