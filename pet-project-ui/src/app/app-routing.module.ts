import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { InsuranceContractComponent } from './insurance-contract/insurance-contract.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ShortClientResolver } from './resolvers/short.client.resolver';
import { ClientResolver } from './resolvers/client.resolver';

const routes: Routes = [
  { path: 'insurance-contract-component', component: InsuranceContractComponent },
  { path: 'clients', component: ClientComponent, resolve: { client: ShortClientResolver } },
  { path: 'clients/:id', component: ClientDetailComponent, resolve: { client: ClientResolver } }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
