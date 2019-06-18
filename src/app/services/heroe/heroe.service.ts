import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from 'src/app/models/heroe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {

  apiUrl = 'https://raw.githubusercontent.com/akabab/superhero-api/0.2.0/api/';

  constructor( private http: HttpClient ) { }

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.apiUrl}all.json`);
  }

}
