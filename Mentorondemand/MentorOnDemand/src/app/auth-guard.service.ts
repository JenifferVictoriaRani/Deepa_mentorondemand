import { Injectable } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  isLoggedIn = false;
  constructor(private route:Router,private authservice:AuthServiceService) { }
  
  canActivate(route: ActivatedRouteSnapshot): boolean{        
    this.isLoggedIn = this.authservice.loggedIn;
    console.log("isLoggedIn: " + this.isLoggedIn);
    if(this.isLoggedIn){
        return true;
    }
    else{
        this.route.navigate(['Login']);
        return false;
    }     
  }
}
