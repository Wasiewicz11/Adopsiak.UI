import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Animal  } from '../models/animal';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private apiUrl = '/api/animals/swipe';

  constructor(private http: HttpClient) {}

  getAnimals (){
    return this.http.get<any[]>(`${environment.apiUrl}/Animals/getRandom`);
  }

}
