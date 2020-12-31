
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService) {
    }

    canActivate(
        // route: ActivatedRouteSnapshot, state: RouterStateSnapshot
        ): any
        //  boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> 
    {
        // throw new Error("Method not implemented.");
        if(this.authService.isAuthenticated()) {
                return true;
            } else {
                this.authService.login();
            }
    }

}