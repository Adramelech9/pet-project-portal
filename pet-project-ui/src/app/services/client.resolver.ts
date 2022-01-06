import { Injectable } from '@angular/core';
import { ClientDetail } from '../client-detail';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ClientService } from './client.service';
import { Observable } from 'rxjs';

@Injectable()
export class ClientResolver implements Resolve<ClientDetail[]> {

  constructor(private clientService: ClientService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ClientDetail[]> {
    return this.clientService.getClientById(route.params[ 'id' ])
  }
}
