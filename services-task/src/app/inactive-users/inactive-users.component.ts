import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CounterService } from '../counter.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {

  users: string[];
  counter:number = 0;


  constructor(private userService: UserService,private counterService:CounterService){
    this.users = userService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.userService.onSetToActive(id)
    this.counterService.counterEmiter.emit({message:'switch from inactive',num: ++this.counter})
  }
}

