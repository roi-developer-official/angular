import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../account/account.service';
import { LogginService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
// this is commented because i injected the loggin service in the account service and there for i dont use it in here
  // providers: [LogginService] //notice that i removed the provider for AccountService because i want this component to use the same instance as in the app.module
})
export class NewAccountComponent {

  constructor(private logginService: LogginService,private accountService : AccountService){

    //listening to a service event.
    this.accountService.statusUpdated.subscribe((status:string)=> alert('New Status' + status))
  }


  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName,accountStatus);
    // this.logginService.logAboutStatusChange(accountStatus);
  }
}
