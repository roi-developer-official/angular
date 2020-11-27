import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CounterService } from '../counter.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

  users: string[];
  counter:number = 0;


  constructor(private userService: UserService,private counterService:CounterService){}
  
  ngOnInit(){
    this.users = this.userService.inactiveUsers;

  }
  onSetToActive(id: number) {
    this.userService.onSetToActive(id)
    this.counterService.counterEmiter.emit({message:'switch from inactive',num: ++this.counter})
  }
}

