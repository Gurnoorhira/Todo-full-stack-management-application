import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(public hardCodedAuthenticationService
    : HardcodedAuthenticationService,
    public router : Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.hardCodedAuthenticationService.isUserLoggedIn())
      return true;
    this.router.navigate(['login']);
    return false;
      
  }
}
