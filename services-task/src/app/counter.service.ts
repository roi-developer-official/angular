import { EventEmitter, Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class CounterService{

    removingActiveCounter = 0;
    removingInactiveCounter = 0;
    counterEmiter = new EventEmitter<{num:number,message:string}>();
 

}