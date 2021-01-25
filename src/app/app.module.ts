import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { OpprettKundeComponent } from './opprett-kunde/opprett-kunde.component';
import { OppdaterKundeComponent } from './oppdater-kunde/oppdater-kunde.component';
import { KundeListeComponent } from './kunde-liste/kunde-liste.component';
import { KundeDetaljerComponent } from './kunde-detaljer/kunde-detaljer.component';
import { Meny } from './meny/meny.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    OpprettKundeComponent,
    OppdaterKundeComponent,
    KundeListeComponent,
    KundeDetaljerComponent,
    Meny
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
