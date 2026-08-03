import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aliment } from '../types/aliment';
//Pour ne pas avoir de rafraichissement manuel de la page
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlimentService {

  private apiUrl = 'http://localhost:5232/api/aliments';
  //Pour ne pas avoir de rafraichissement manuel de la page
  public alimentAdded = new Subject<void>();


  constructor(private http: HttpClient) { }

  getAll(): Observable<Aliment[]> {
    return this.http.get<Aliment[]>(this.apiUrl);
  }

  //cas 2 : ajout aliment
  create(aliment: Aliment): Observable<Aliment> {
    return this.http.post<Aliment>(
      this.apiUrl,
      aliment
    );
  }
}
