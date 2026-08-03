import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { DateSurveillance } from '../types/date-surveillance';
import { Aliment } from '../types/aliment';

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

  getAlimentsForDate(dateId: number) {
    return this.http.get<Aliment[]>(
      `${this.apiUrl}/${dateId}/aliments`
    );
  }

  deleteAlimentFromDate(
    dateId: number,
    alimentConsommeId: number
  ) {
    return this.http.delete<boolean>(
      `${this.apiUrl}/${dateId}/aliments/${alimentConsommeId}`
    );
  }

  //cas 8 : afficher points pour une date
  getPoints(dateId: number) {

    return this.http.get<number>(
      `${this.apiUrl}/${dateId}/points`
    );

  }
}
