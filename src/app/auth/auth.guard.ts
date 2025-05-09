import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate():boolean {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
     
    if(isLoggedIn){
      return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
