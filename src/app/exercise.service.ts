import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private apiUrl = 'https://api.api-ninjas.com/v1/exercises?muscle=biceps';

  constructor(private http: HttpClient) { }

  getExercises() {
    console.log('Récupération des exercices...');
    const headers = new HttpHeaders({
      'X-Api-Key': environment.apiKey
    });
    return this.http.get(this.apiUrl, { headers });
  }
}