

import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

@Injectable()
export class AppGuardService implements CanActivate {
    constructor(private _router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        console.log("canActivate");
        //return true
        //remove comments to return true
        alert("You are not allowed to view this page. You are redirected to error page");
        this._router.navigate(["error"]);
        return false;
    }

}

@Injectable()
export class AuthUserService implements CanActivate {
    constructor(private _router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        //write authentication logic
        return false;
    }
}