import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../client';
import { ClientDetail } from '../client-detail';
import { Endpoints } from '../constant/endpoints.constant';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {
  }

  getClientsList(): Observable<Client[]> {
    return this.http.get<Client[]>(Endpoints.CLIENT);
  }

  getClientById(id: number): Observable<ClientDetail> {
    return this.http.get<ClientDetail>(Endpoints.CLIENT_DETAIL(id));
  }

  clientCreate(client: ClientDetail): Observable<number> {
    return this.http.post<number>(Endpoints.CLIENT, client)
  }
}
