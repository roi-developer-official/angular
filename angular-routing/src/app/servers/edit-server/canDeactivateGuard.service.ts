import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactive{
    canDectivate: ()=>  boolean ;
}

export class CanDeactiveGuard implements CanDeactivate<CanComponentDeactive>{

    canDeactivate(component:CanComponentDeactive,
         currentRoute:ActivatedRouteSnapshot,
          currentState: RouterStateSnapshot,
           nextState?: RouterStateSnapshot) : boolean 
    {
        return component.canDectivate();
    }


}