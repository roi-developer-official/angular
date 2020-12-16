import { HttpEventType, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs/operators";

export class AuthInterceptorService implements HttpInterceptor{
    intercept(req:HttpRequest<any>, next: HttpHandler){

        //if(req.url)

        //create a new request
        // const modifedRequest = req.clone({url: 'some-new-url', headers: new HttpHeaders({'some header':'bal'})})
        // return next.handle(modifedRequest);


        console.log('req is on its way')
        return next.handle(req).pipe(tap(event=>{
            if(event.type === HttpEventType.Response){
                console.log('response arrived body data', event.body)
            }
        }))
    }

}