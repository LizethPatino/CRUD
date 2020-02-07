import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../Modelo/Usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  Url = 'http://localhost:8080/ejemplo01/authenticate';
  headers: HttpHeaders;

  constructor(private http:HttpClient) {
   /* this.headers = new HttpHeaders({
      'content-Type': 'application/json'
    });*/
   }

  login(usuario: Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.Url, localStorage.setItem('access_token', usuario.token));
  }

  
}

