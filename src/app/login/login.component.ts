import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  public model: any = {};
  public isInvalid = false;
  public returnUrl: string;

  constructor(private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    if (this.authenticationService.login(this.model.username, this.model.password)) {
      this.router.navigate([this.returnUrl]);
    } else {
      this.isInvalid = true;
    }
  }
}
