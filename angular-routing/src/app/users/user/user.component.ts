import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: { id: number, name: string };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      //this will update the details on the page only if the page has rerenderd
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    //this will update the details on the page even if the page doesn't rerenderd
    this.route.params.subscribe(
      (params:Params)=>{
        this.user.id = params['id'],
        this.user.name = params['name']
      }
    );
  }

}
