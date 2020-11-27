import { Component, OnInit } from '@angular/core';
import { CounterService } from './counter.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  activeUsers = [];
  inactiveUsers = [];

  constructor(private userService:UserService,private counterService : CounterService){
    counterService.counterEmiter.subscribe(({message,num})=>{
      alert(`${message} ${num} times`)
    })
  }


  ngOnInit(){
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;
  }

  
}
