import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientDetail } from '../../client-detail';
import { ClientService } from '../../services/client.service';
import { States } from '../../constant/states.constant';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: [ './client-detail.component.css' ]

})
export class ClientDetailComponent implements OnInit {

  client: ClientDetail = new ClientDetail();
  isNewClient = true;

  firstNameControl = new FormControl('', [ Validators.required ]);
  lastNameControl = new FormControl('', [ Validators.required ]);
  birthDateControl = new FormControl('', [ Validators.required ]);
  emailControl = new FormControl('', [ Validators.required, Validators.email ]);
  passwordControl = new FormControl('', [ Validators.required ]);

  formGroup = new FormGroup({
    firstName: this.firstNameControl,
    lastName: this.lastNameControl,
    birthDate: this.birthDateControl,
    email: this.emailControl,
    password: this.passwordControl
  })

  constructor(
    private activatedRoute: ActivatedRoute,
    private clientService: ClientService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    const clientData = this.activatedRoute.snapshot.data[ 'client' ];
    if (clientData) {
      this.isNewClient = false;
      this.client = clientData;
      this.setControlValue();
    }
  }

  onSubmit() {
    this.clientService.clientCreate(this.formGroup.value).subscribe(
      clientId => {
        this.router.navigate([ States.CLIENTS_VIEW(clientId) ]);
      }
    )
  }

  setControlValue() {
    this.firstNameControl.setValue(this.client.firstName);
    this.lastNameControl.setValue(this.client.lastName);
    this.birthDateControl.setValue(this.client.birthDate);
    this.emailControl.setValue(this.client.email);
    this.passwordControl.setValue(this.client.password);
    this.formGroup.disable();
  }
}
