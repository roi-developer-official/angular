import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CounterService } from '../counter.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  users: string[];
  counter:number = 0;


  constructor(private userService:UserService,private counterService:CounterService){
    this.users = userService.activeUsers;

  }
  onSetToInactive(id: number) {
    this.userService.onSetToInactive(id)
    this.counterService.counterEmiter.emit({message:'switch from active',num: ++this.counter});
  }
}

