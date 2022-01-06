import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { InsuranceContractComponent } from './insurance-contract/insurance-contract.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientResolver } from './services/client.resolver';

const routes: Routes = [
  { path: 'insurance-contract-component', component: InsuranceContractComponent },
  { path: 'client-component', component: ClientComponent },
  { path: 'client-component/:id', component: ClientDetailComponent, resolve: { client: ClientResolver } }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
