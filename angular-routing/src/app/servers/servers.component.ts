import {
  Component, OnInit
}
  from '@angular/core';
import {
  ActivatedRoute, ActivatedRouteSnapshot, CanActivateChild, Router,RouterLink, RouterStateSnapshot, UrlTree
}
  from '@angular/router';
import { Observable } from 'rxjs';
import {
  ServersService
}
  from './servers.service';

@Component({ selector: 'app-servers', templateUrl: './servers.component.html', styleUrls: ['./servers.component.css'] }) export class ServersComponent implements OnInit {
  public servers: {
    id: number,
    name: string,
    status: string
  }[] = [];

  constructor(private serversService: ServersService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    // this.router.navigate(['servers'], {relativeTo: this.route }); //relative : server/servers
  }


}
