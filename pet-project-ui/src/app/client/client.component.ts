import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../services/client.service';
import { Router } from '@angular/router';
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
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getClients();
  }

  private getClients() {
    this.clientService.getClientsList().subscribe(data => {
      this.clients = data;
    })
  }

  onView(row: Client) {
    this.router.navigate([ States.CLIENTS_VIEW(row.id) ])
  }
}
