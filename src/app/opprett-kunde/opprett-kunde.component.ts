import { Component, OnInit } from '@angular/core';
import { Kunde } from '../kunde';
import { Router } from '@angular/router';
import { KundeService } from '../kunde.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-opprett-kunde',
  templateUrl: './opprett-kunde.component.html',
  styleUrls: ['./opprett-kunde.component.css']
})
export class OpprettKundeComponent {
  opprettKundeSkjema!: FormGroup;
  kunde: Kunde = new Kunde();
  submitted = false;

  validering = {
    fornavn: ["", Validators.required],
    etternavn: ["", Validators.required],
    email: [
          null, Validators.compose([Validators.required, Validators.pattern("[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}")])
    ]
  }

  constructor(private kundeService: KundeService, private fb: FormBuilder,
    private router: Router) { 
      this.opprettKundeSkjema = fb.group(this.validering);
    }


nyKunde(): void {
    this.submitted = false;
    this.kunde = new Kunde();
  }
  
lagre() {
    this.kunde.fornavn = this.opprettKundeSkjema.value.fornavn;
    this.kunde.etternavn = this.opprettKundeSkjema.value.etternavn;
    this.kunde.email = this.opprettKundeSkjema.value.email;

    this.kundeService.opprettKunde(this.kunde)
      .subscribe(data => console.log(data), error => console.log(error));
    this.kunde = new Kunde();
    this.visKundeListe();
  }

onSubmit() {
    this.submitted = true;
    this.lagre();    
  }

visKundeListe() {
    this.router.navigate(['kunder']);
  }
}