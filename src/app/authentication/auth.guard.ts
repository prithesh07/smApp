import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router)
  {

  }
  canActivate(){
    return true;
    /*console.log('auth started')
    
    if(sessionStorage.getItem('user'))
    {
      console.log("auth success")
      return true;
    }
    else 
    {
      alert("Access Denied...redirecting to login page")
      this.router.navigate(['/login']);
      console.log("auth failed")
      return false;
    }*/
    

  }
  
}
