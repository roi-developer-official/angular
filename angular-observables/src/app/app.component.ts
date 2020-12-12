import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-observables';
  userActivated = false;

  constructor(private userService:UserService){}

  ngOnInit(){
    this.userService.activatedEmitter.subscribe(didActivate =>{
      this.userActivated = didActivate;
    })

  }
  ngOnDestroy(){
    this.userService.activatedEmitter.unsubscribe();
  }




}
