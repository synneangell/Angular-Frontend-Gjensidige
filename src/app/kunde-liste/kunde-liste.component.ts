import { Kunde } from "../kunde";
import { Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";import { KundeService } from "../kunde.service";


@Component({
  selector: "app-kunde-liste",
  templateUrl: "./kunde-liste.component.html",
  styleUrls: ["./kunde-liste.component.css"]
})
export class KundeListeComponent implements OnInit {
  kunder!: Kunde[];

  constructor(private kundeService: KundeService,
    private router: Router) {}

  ngOnInit() {
    this.getKunder();
  }

  private getKunder() {
    this.kundeService.getKundeListe().subscribe(data => {
      this.kunder = data;
      });
  }

  oppdaterKunde(id: number){
        this.router.navigate(['oppdater-kunde', id]);
  }
    
  slettKunde(id: number){
        this.kundeService.slettKunde(id).subscribe( data => {
          console.log(data);
          this.getKunder();
        })
  }

  kundeDetaljer(id: number){
    this.router.navigate(['kunde-detaljer', id]);
  }

  
}