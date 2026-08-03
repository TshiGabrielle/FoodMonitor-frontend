import { Component, OnInit } from '@angular/core';
import { AlimentService } from '../../services/aliment';
import { Aliment } from '../../types/aliment';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-aliment-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aliment-list.html',
  styleUrl: './aliment-list.css'
})
export class AlimentListComponent implements OnInit {

  aliments: Aliment[] = [];

  constructor(private alimentService: AlimentService) {
  }

  ngOnInit(): void {
    this.alimentService.getAll()
      .subscribe(data => {
        console.log(data);
        this.aliments = data;
      });
  }
}
