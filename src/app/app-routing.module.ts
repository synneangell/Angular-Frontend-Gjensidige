import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KundeListeComponent } from './kunde-liste/kunde-liste.component';
import { OpprettKundeComponent } from './opprett-kunde/opprett-kunde.component';
import { OppdaterKundeComponent } from './oppdater-kunde/oppdater-kunde.component';
import { KundeDetaljerComponent } from './kunde-detaljer/kunde-detaljer.component';

const routes: Routes = [
{ path: '', redirectTo: 'kunde', pathMatch: 'full' },
  { path: 'kunder', component: KundeListeComponent },
  { path: 'opprett-kunde', component: OpprettKundeComponent },
  { path: 'oppdater-kunde/:id', component: OppdaterKundeComponent },
  { path: 'kunde-detaljer/:id', component: KundeDetaljerComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }