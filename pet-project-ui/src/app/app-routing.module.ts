import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsuranceContractComponent } from './insurance-contract/insurance-contract.component';

const routes: Routes = [
  { path: 'insurance-contract-component', component: InsuranceContractComponent },
  {
    path: 'clients',
    loadChildren: () => import('./client/client-routing.module').then(m => m.ClientRoutingModule)
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
