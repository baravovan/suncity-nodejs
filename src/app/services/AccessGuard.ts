import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { CookieService } from "angular2-cookie/core";
import { UtilsService } from '../services/utils.service';

@Injectable()
export class AccessGuard implements CanActivate {
    
    constructor(private _cookieService: CookieService,
                private _util: UtilsService) { }
  
    canActivate(route: ActivatedRouteSnapshot) : boolean {
        const requiresLogin = route.data.requiresLogin || false;
        if (requiresLogin) {
            var cookie = this._cookieService.get('test');
            return this._util.checkCookie(cookie);
        }
    }  
}