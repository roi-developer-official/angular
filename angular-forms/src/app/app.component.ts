import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  approach = true;

  changeApproach(){
    this.approach = !this.approach;
    console.log(this.approach)

  }


}
