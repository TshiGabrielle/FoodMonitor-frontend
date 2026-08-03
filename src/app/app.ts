import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlimentListComponent } from './app/components/aliment-list/aliment-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AlimentListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('food-monitor-frontend');
}
