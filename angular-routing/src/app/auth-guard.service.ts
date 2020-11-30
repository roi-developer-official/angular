import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild{
    constructor(private authService:AuthService, private route: Router){}
    //protect all the Child Route:
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean>  | Promise<boolean> {
        return this.authService.isAuth().then((auth: boolean)=>{
            if(auth)
                return true;
            this.route.navigate(['/']);
     })
    }
    
    // protect the Route itsels
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        throw new Error('Method not implemented.');  
    }

}
