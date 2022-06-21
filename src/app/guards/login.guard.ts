import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  canActivate(
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.loginService.isAuthenticated()) {
      return true;
    } else {
      // this._router.navigateByUrl('login/' + this._router.url);
      this.router.navigateByUrl('login');
      alert('You have to login!');
      return false;
    }
  }
}
