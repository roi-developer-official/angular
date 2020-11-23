import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  showP = false;
  toggleArray = [];

  toggleP = ()=>{
    this.showP = !this.showP;
    this.toggleArray.push(Date.now());
  }
}
