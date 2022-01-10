import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';
import { ShortClientResolver } from '../resolvers/short.client.resolver';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientResolver } from '../resolvers/client.resolver';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'clients', component: ClientComponent, resolve: { client: ShortClientResolver } },
      { path: 'clients/create', component: ClientDetailComponent },
      { path: 'clients/:id', component: ClientDetailComponent, resolve: { client: ClientResolver } }
    ])
  ]
})
export class ClientRoutingModule {
}
