import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateService } from '../../services/date';
import { DateSurveillance } from '../../types/date-surveillance';

@Component({
  selector: 'app-date-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './date-list.html',
  styleUrl: './date-list.css'
})
export class DateListComponent implements OnInit {

  dates: DateSurveillance[] = [];

  constructor(
    private dateService: DateService
  ) {
  }

  ngOnInit(): void {

    this.loadDates();

    this.dateService.dateAdded
      .subscribe(() => {
        this.loadDates();
      });
  }

  loadDates() {
    this.dateService.getAll()
      .subscribe(data => {
        this.dates = [...data];
      });
  }
}
