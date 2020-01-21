import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url = 'http://localhost:8080/ejemplo01/personas';

  getPersonas(){
    return this.http.get<Persona[]>(this.Url);
  }

  addPersona(persona: Persona):Observable<Persona>{
    return this.http.post<Persona>(this.Url, persona);
  }
}
