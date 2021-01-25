import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Kunde } from '../kunde';
import { KundeService } from '../kunde.service';

@Component({
  selector: 'app-oppdater-kunde',
  templateUrl: './oppdater-kunde.component.html',
  styleUrls: ['./oppdater-kunde.component.css']
})
export class OppdaterKundeComponent implements OnInit {

  id!: number;
  kunde: Kunde = new Kunde();
  oppdaterKundeSkjema!: FormGroup;

  constructor(private kundeService: KundeService,
      private route: ActivatedRoute,
      private router: Router) {    
  }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.kundeService.getKundeVedId(this.id)
    .subscribe(data => {
      this.kunde = data;
    }, error => console.log(error));

    this.oppdaterKundeSkjema= new FormGroup({
      fornavn: new FormControl(),
      etternavn: new FormControl(),
      email: new FormControl()
   });

   this.oppdaterKundeSkjema.setValue({
    fornavn: this.kunde.fornavn, 
    etternavn: this.kunde.etternavn,
    email: this.kunde.email
  });

  }

  onSubmit(){
    this.kunde.fornavn = this.oppdaterKundeSkjema.value.fornavn;
    this.kunde.etternavn = this.oppdaterKundeSkjema.value.etternavn;
    this.kunde.email = this.oppdaterKundeSkjema.value.email;

    this.kundeService.oppdaterKunde(this.id, this.kunde)
      .subscribe( data =>{ this.navigerTilKundeListe();}
    , error => console.log(error));
  }

  navigerTilKundeListe(){
    this.router.navigate(['/kunder']);
  }
}