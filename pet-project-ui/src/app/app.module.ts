import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { InsuranceContractComponent } from './insurance-contract/insurance-contract.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateClientComponent } from './create-client/create-client.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientResolver } from './services/client.resolver';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    InsuranceContractComponent,
    CreateClientComponent,
    ClientDetailComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatNativeDateModule,
        MatTableModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule
    ],
  providers: [ ClientResolver ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
