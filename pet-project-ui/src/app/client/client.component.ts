import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../services/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { States } from '../constant/states.constant';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: [ './client.component.css' ]
})
export class ClientComponent implements OnInit {

  clients: Client[] = [];

  displayedColumns: string[] = [ 'firstName', 'lastName' ];
  columnsToDisplay: string[] = this.displayedColumns.slice();

  constructor(
    private clientService: ClientService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.clients = this.activatedRoute.snapshot.data[ 'client' ];
  }

  onView(row: Client): void {
     this.router.navigate([ States.CLIENTS_VIEW(row.id) ])
  }

  addClient() {
    this.router.navigate([States.CLIENTS_CREAT])
  }
}
