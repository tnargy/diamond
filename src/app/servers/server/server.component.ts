import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Data, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);
    // this.route.params.subscribe(
    //   (parms: Params) => {
    //     this.server = this.serversService.getServer(+parms['id']);
    //   }
    // )
    this.route.data.subscribe(
      (data: Data) => {
        this.server = data['server'];
      }
    )
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

}
