import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

export class ServerResolver implements Resolve<{id:number, name:string}>{
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): { id: number; name: string; } | Observable<{ id: number; name: string; }> | Promise<{ id: number; name: string; }> {
        throw new Error('Method not implemented.');
    }

}