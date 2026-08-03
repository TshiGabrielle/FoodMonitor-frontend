import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlimentService } from '../../services/aliment';
import { Input } from '@angular/core';

@Component({
  selector: 'app-aliment-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './aliment-form.html',
  styleUrl: './aliment-form.css'
})
export class AlimentFormComponent {

  nom = '';
  points = 0;
  //Pour modifier un aliment sélectionné
  selectedId: number | null = null;

  constructor(
    private alimentService: AlimentService
  ) {
    //modifier aliment
    this.alimentService.alimentToEdit
      .subscribe(aliment => {

        this.selectedId = aliment.id;
        this.nom = aliment.nom;
        this.points = aliment.points;

      });
  }

  add() {

    if (this.selectedId === null) {

      this.alimentService.create({
        id: 0,
        nom: this.nom,
        points: this.points
      })
        .subscribe(() => {

          this.alimentService.alimentAdded.next();

          this.nom = '';
          this.points = 0;
        });

    }
    else {

      this.alimentService.update({
        id: this.selectedId,
        nom: this.nom,
        points: this.points
      })
        //pour rafraichissement automatique
        .subscribe(() => {

          this.alimentService.alimentAdded.next();

          //Pour modifier aliment sélectionné
          this.selectedId = null;
          this.nom = '';
          this.points = 0;
        });

    }
  }

}
