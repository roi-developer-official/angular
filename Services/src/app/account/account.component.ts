import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LogginService } from '../logging.service';
import { AccountService } from './account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LogginService] // this is commented because i injected the loggin service in the account service and there for i dont use it in here
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  
  constructor(private loggingService: LogginService, private accountService:AccountService){}
  onSetTo(status: string) {
    this.accountService.updateStatus(this.id,status);
    // this.loggingService.logAboutStatusChange(status);

    //binding an event.
    this.accountService.statusUpdated.emit(status);
  }
}
