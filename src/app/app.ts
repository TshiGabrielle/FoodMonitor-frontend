import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlimentListComponent } from './app/components/aliment-list/aliment-list';
import { AlimentFormComponent } from './app/components/aliment-form/aliment-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AlimentListComponent, AlimentFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('food-monitor-frontend');
}
