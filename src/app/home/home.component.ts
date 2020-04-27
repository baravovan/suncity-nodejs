import { Component, OnInit } from '@angular/core';
import { CookieService } from "angular2-cookie/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _cookieService: CookieService) { }

  ngOnInit(): void {
  }

  logout(){
    this._cookieService.remove('test');
  }
}
