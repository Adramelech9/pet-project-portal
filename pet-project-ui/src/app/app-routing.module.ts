import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsuranceContractComponent } from './insurance-contract/insurance-contract.component';
import { States } from './constant/states.constant';

const routes: Routes = [
  { path: `${ States.CONTRACTS }`, component: InsuranceContractComponent },
  {
    path: `${ States.CLIENTS }`,
    loadChildren: () => import('./client/client-routing.module').then(m => m.ClientRoutingModule)
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
