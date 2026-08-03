import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DateService } from '../../services/date';
import { AlimentService } from '../../services/aliment';

import { Aliment } from '../../types/aliment';
import { DateSurveillance } from '../../types/date-surveillance';

@Component({
  selector: 'app-date-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './date-form.html',
  styleUrl: './date-form.css'
})
export class DateFormComponent implements OnInit {

  date = '';

  aliments: Aliment[] = [];
  dates: DateSurveillance[] = [];

  selectedDateId = 0;
  selectedAlimentId = 0;

  constructor(
    private dateService: DateService,
    private alimentService: AlimentService
  ) {
  }

  ngOnInit(): void {

    this.dateService
      .getAll()
      .subscribe(data => {

        console.log('DATES', data);

        this.dates = [...data];

      });

    this.alimentService
      .getAll()
      .subscribe(data => {

        console.log('ALIMENTS', data);

        this.aliments = [...data];

      });
  }

  add() {

    this.dateService.create({
      id: 0,
      date: this.date
    })
      .subscribe(() => {

        this.dateService.dateAdded.next();

        this.date = '';
      });
  }

  addAlimentToDate() {

    console.log(
      'date',
      this.selectedDateId,
      'aliment',
      this.selectedAlimentId
    );

    this.dateService.addAliment(
      this.selectedDateId,
      this.selectedAlimentId
    )
      .subscribe(() => {

        this.dateService
          .alimentAddedToDate
          .next();

      });
  }
}
