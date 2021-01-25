import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Kunde } from './kunde';

@Injectable({
  providedIn: 'root'
})
export class KundeService {

  private baseURL= 'http://localhost:8080/api/v1/kunder';

  constructor(private httpClient: HttpClient) { }
  
  getKundeListe(): Observable<Kunde[]>{
    return this.httpClient.get<Kunde[]>(`${this.baseURL}`);
  }

  opprettKunde(kunde: Kunde): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, kunde);
  }

  getKundeVedId(id: number): Observable<Kunde>{
    return this.httpClient.get<Kunde>(`${this.baseURL}/${id}`);
  }

  oppdaterKunde(id: number, kunde: Kunde): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, kunde);
  }

  slettKunde(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}