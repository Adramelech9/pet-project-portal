import { Injectable, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsuranceContractComponent } from './insurance-contract/insurance-contract.component';

@Injectable()
export class Throttle {
  resolve() {
    return new Promise(resolve => setTimeout(resolve, 500));
  }
}

const routes: Routes = [
  { path: 'insurance-contract-component', component: InsuranceContractComponent },
  {
    path: 'clients',
    loadChildren: () => import('./client/client-routing.module').then(m => m.ClientRoutingModule),
    resolve: {
      Throttle
    }
  }
];

@NgModule({
  providers: [ Throttle ],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
