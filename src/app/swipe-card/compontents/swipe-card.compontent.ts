import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalService } from '../../Animal/services/animal.service';
import { Animal } from '../../Animal/models/animal';

import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-swipe-card',
  imports: [CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule],
  templateUrl: 'swipe-card.component.html',
  styleUrls: ['swipe-card.component.css'],
})
export class SwipeCardComponent implements OnInit {
  animals: any[] = [];
  currentAnimal: Animal | null = null;
  animationState = 'visible';

  constructor(private animalService: AnimalService) {}

  ngOnInit() {
    this.loadAnimals();
  }

  loadAnimals() {
    this.animalService.getAnimals().subscribe(data => {
      console.log(data);
      this.animals = data;
      this.currentAnimal = this.animals.length > 0 ? this.animals[0] : null;
      console.log("demo");
    });
  }

  swipeAnimal(liked: boolean) {
    if (!this.currentAnimal) return;

    if (liked){
      console.log(this.currentAnimal.petDetailsUrl);
      window.open(this.currentAnimal.petDetailsUrl, '_blank')
    }
    console.log(liked ? 'Polubiono' : 'Pominięto', this.currentAnimal.name);

    // Przesunięcie do kolejnego zwierzęcia
    this.animals.shift();
    this.currentAnimal = this.animals.length > 0 ? this.animals[0] : null;

    // Jeśli brak nowych zwierząt, pobieramy kolejne
    if (this.animals.length === 0) {
      this.loadAnimals();
    }
  }
}
