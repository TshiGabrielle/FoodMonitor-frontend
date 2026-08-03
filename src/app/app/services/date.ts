import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { DateSurveillance } from '../types/date-surveillance';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  private apiUrl = 'http://localhost:5232/api/dates';

  public dateAdded = new Subject<void>();
  public alimentAddedToDate = new Subject<void>();

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<DateSurveillance[]> {
    return this.http.get<DateSurveillance[]>(this.apiUrl);
  }

  create(date: DateSurveillance): Observable<DateSurveillance> {
    return this.http.post<DateSurveillance>(
      this.apiUrl,
      date
    );
  }

  //cas 6 : ajout aliment consommé
  addAliment(
    dateId: number,
    alimentId: number
  ) {
    return this.http.post(
      `${this.apiUrl}/${dateId}/aliments`,
      {
        alimentId: alimentId
      }
    );
  }

}
