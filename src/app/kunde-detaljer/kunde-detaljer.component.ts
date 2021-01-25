import { Kunde } from '../kunde';
import { Component, OnInit, Input } from '@angular/core';
import { KundeService } from '../kunde.service';
import { KundeListeComponent } from '../kunde-liste/kunde-liste.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kunde-detaljer',
  templateUrl: './kunde-detaljer.component.html',
  styleUrls: ['./kunde-detaljer.component.css']
})
export class KundeDetaljerComponent implements OnInit {

  id!: number;
  kunde!: Kunde;

  constructor(private route: ActivatedRoute,private router: Router,
    private es: KundeService) { }

  ngOnInit() {
    this.kunde = new Kunde();

    this.id = this.route.snapshot.params['id'];
    
    this.es.getKundeVedId(this.id)
      .subscribe(data => {
        console.log(data)
        this.kunde = data;
      }, error => console.log(error));
  }

  KundeListe(){
    this.router.navigate(['kunder']);
  }
}