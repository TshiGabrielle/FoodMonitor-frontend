import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { AlimentService } from '../../services/aliment';
import { Aliment } from '../../types/aliment';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-aliment-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './aliment-list.html',
  styleUrl: './aliment-list.css'
})
export class AlimentListComponent implements OnInit {

  aliments: Aliment[] = [];

  constructor(private alimentService: AlimentService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {

    this.loadAliments();

    this.alimentService.alimentAdded
      .subscribe(() => {
        this.loadAliments();
      });
  }

  //Pour afficher sans rafraichissment manuel les aliments
  loadAliments() {
    this.alimentService.getAll()
      .subscribe(data => {

        console.log('chargement', data);

        this.aliments = data;
        this.cdr.detectChanges();
      });
  }

  //pour modifier un aliment de la liste
  edit(aliment: Aliment) {
    this.alimentService.alimentToEdit.next(aliment);
  }
}
