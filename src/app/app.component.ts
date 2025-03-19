import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importuj CommonModule
import { RouterOutlet } from '@angular/router';
import { AnimalService } from './Animal/services/animal.service';
import {SwipeCardComponent} from './swipe-card/compontents/swipe-card.compontent';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, SwipeCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  animals: any[] = [];  // Zmienna do przechowywania danych o zwierzętach

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.animalService.getAnimals().subscribe(data => {
      this.animals = data;  // Przypisz dane z API do zmiennej animals
    });
  }

  title = 'Adopsiak';
}
