import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';
import { NameClientsResolver } from '../resolvers/name.clients.resolver';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientResolver } from '../resolvers/client.resolver';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: ClientComponent, resolve: { client: NameClientsResolver } },
      { path: 'create', component: ClientDetailComponent },
      { path: ':id', component: ClientDetailComponent, resolve: { client: ClientResolver } }
    ])
  ]
})
export class ClientRoutingModule {
}
