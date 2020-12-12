
import { EventEmitter, Injectable } from '@angular/core';
import { LogginService } from '../logging.service';

@Injectable({providedIn :"root"}) // this is for the service injection.
export class AccountService{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      constructor(private logginServie: LogginService){}

      //binding an event.
      statusUpdated = new EventEmitter<string>();

      addAccount(name:string, status:string){
          this.accounts.push({name: name, status:status})
          this.logginServie.logAboutStatusChange(status);    
        }
        
        updateStatus(id:number, status:string){
            this.accounts[id].status = status;
            this.logginServie.logAboutStatusChange(status);
      }
}