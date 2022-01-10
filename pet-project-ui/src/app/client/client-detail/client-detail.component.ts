import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientDetail } from '../../client-detail';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: [ './client-detail.component.css' ]

})
export class ClientDetailComponent implements OnInit {

  client: ClientDetail = new ClientDetail();

  constructor(
    private router: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.client = this.router.snapshot.data[ 'client' ];
  }
}
