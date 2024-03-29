
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(1);
    this.route.params.subscribe((params:Params)=>{
        this.server = this.serversService.getServer(+params['id'])
        console.log(this.server.id)
    })
  }

  onEdit(){
 //this will make sure that the params won't drop. there is also merge to not lose the prev params.
    this.router.navigate(['edit'],{relativeTo : this.route, queryParamsHandling: 'preserve'});
  }
  
}
