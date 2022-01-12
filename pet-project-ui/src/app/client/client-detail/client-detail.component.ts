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

  firstNameController = new FormControl('', [ Validators.required ]);
  lastNameController = new FormControl('', [ Validators.required ]);
  birthDateController = new FormControl('', [ Validators.required ]);
  emailController = new FormControl('', [ Validators.required, Validators.email ]);
  passwordController = new FormControl('', [ Validators.required ]);

  formGroup = new FormGroup({
    firstName: this.firstNameController,
    lastName: this.lastNameController,
    birthDate: this.birthDateController,
    email: this.emailController,
    password: this.passwordController
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
      this.firstNameController.setValue(this.client.firstName);
      this.lastNameController.setValue(this.client.lastName);
      this.birthDateController.setValue(this.client.birthDate);
      this.emailController.setValue(this.client.email);
      this.passwordController.setValue(this.client.password);
    }
  }

  onSubmit() {
    this.clientService.clientCreate(this.formGroup.value).subscribe(
      clientId => {
        this.router.navigate([ States.CLIENTS_VIEW(clientId) ]);
      }
    )
  }
}
