import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DateService } from '../../services/date';
import { Aliment } from '../../types/aliment';
import { DateSurveillance } from '../../types/date-surveillance';

@Component({
  selector: 'app-date-aliments',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './date-aliments.html',
  styleUrl: './date-aliments.css'
})
export class DateAlimentsComponent {

  dates: DateSurveillance[] = [];

  selectedDateId = 0;

  aliments: Aliment[] = [];
  totalPoints = 0;

  constructor(
    private dateService: DateService
  ) {
  }

  ngOnInit(): void {

    this.dateService
      .getAll()
      .subscribe(data => {

        this.dates = data;

      });

  }

  loadAliments() {

    if (this.selectedDateId === 0) {
      return;
    }

    this.dateService
      .getAlimentsForDate(
        this.selectedDateId
      )
      .subscribe(data => {

        this.aliments = data;

      });

    this.dateService
      .getPoints(
        this.selectedDateId
      )
      .subscribe(points => {

        this.totalPoints = points;

      });

  }

  //cas 8 : calculs points
  deleteAliment(alimentId: number) {

    this.dateService
      .deleteAlimentFromDate(
        this.selectedDateId,
        alimentId
      )
      .subscribe(() => {

        this.loadAliments();

      });

  }
}
