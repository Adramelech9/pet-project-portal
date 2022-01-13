import { Observable } from 'rxjs';
import { Client } from '../client';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { ClientService } from '../services/client.service';

@Injectable()
export class NameClientsResolver implements Resolve<Client[]> {

  constructor(private clientService: ClientService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Client[]> {
    return this.clientService.getClientsList()
  }
}
