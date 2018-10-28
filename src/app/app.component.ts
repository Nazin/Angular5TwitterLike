import { Component } from '@angular/core';
import {AuthenticationService} from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {

  public isLoggedIn = false;

  constructor(private authenticationService: AuthenticationService) {
    this.isLoggedIn = this.authenticationService.isLoggedIn();
    this.authenticationService.loginEvent.subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
  }

  logout() {
    this.authenticationService.logout();
  }
}
