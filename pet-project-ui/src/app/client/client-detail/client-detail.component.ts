import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientDetail } from '../../client-detail';
import { ClientService } from '../../services/client.service';
import { States } from '../../constant/states.constant';
import { ClientComponent } from '../client.component';
import { Client } from '../../client';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: [ './client-detail.component.css' ]

})
export class ClientDetailComponent implements OnInit {

  client: ClientDetail = new ClientDetail();
  currentUrl = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private clientService: ClientService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.currentUrl = this.router.url;
    const clientData = this.activatedRoute.snapshot.data[ 'client' ];
    if (clientData)
      this.client = clientData
  }

  onSubmit() {
    console.log(this.client);
    this.clientService.clientCreate(this.client).subscribe()
    this.router.navigate([ States.CLIENTS ]);
  }
}
