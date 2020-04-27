import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { CookieService } from "angular2-cookie/core";
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService ]
})
export class LoginComponent implements OnInit {

  public user : User;

  constructor(private loginService: LoginService,
              private router: Router,
              private _cookieService: CookieService,
              private _util: UtilsService) { 
    this.user = new User();
  }

  validateLogin() {
    if(this.user.username && this.user.password) {
      this.loginService.validateLogin(this.user).subscribe(result => {
      console.log('result is ', result);
      if(result['status'] === 'success') {
        this._cookieService.put("test", this._util.uuidv4());
        this.router.navigate(['/home']);
      } else {
        alert('Wrong username password');
      }
    }, error => {
      console.log('error is ', error);
    });
    } else {
      alert('enter user name and password');
    }
  }

  ngOnInit(): void {
  }

  
}
