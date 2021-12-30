import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent} from './client/client.component';
import { InsuranceContractComponent} from './insurance-contract/insurance-contract.component';
import { AddClientComponent } from './add-client/add-client.component';

const routes: Routes = [
  { path: 'insurance-contract-component', component: InsuranceContractComponent},
  { path: 'client-component', component: ClientComponent},
  { path: 'add-client-component', component: AddClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
