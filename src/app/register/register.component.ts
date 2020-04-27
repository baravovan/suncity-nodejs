import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { CookieService } from "angular2-cookie/core";
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ LoginService ]
})
export class RegisterComponent implements OnInit {

  public user : User;

  constructor(private loginService: LoginService,
    private router: Router,
    private _cookieService: CookieService,
    private _util: UtilsService) { 
      this.user = new User();
    }

  ngOnInit(): void {
  }

  register(){
    if(this.user.username && this.user.password && this.user.name) {
      this.loginService.register(this.user).subscribe(result => {
      console.log('result is ', result);
      if(result['status'] === 'success') {
        this._cookieService.put("test", this._util.uuidv4());
        this.router.navigate(['/home']);
      } else {
        alert('Something went wrong. Can not register user');
      }
    }, error => {
      console.log('error is ', error);
    });
    } else {
      alert('enter user name and password');
    }
  }
}
