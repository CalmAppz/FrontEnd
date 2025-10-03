import { Injectable } from '@angular/core';
import { user } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class Users {
  private url = `${environment.base}/User`;

  constructor(private httpClient: HttpClient) {}

  // Método para crear un nuevo usuario
  insert(user: any): Observable<any> {
    return this.httpClient.post<any>(`${this.url}/Registro`, user, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
  }
  
  // Método para obtener la lista de usuarios
  list(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.url}`);
  }

  // Método para establecer la lista de usuarios
  setList(listaNueva: any[]): void {
    // Aquí puedes implementar alguna lógica para manejar la lista de usuarios
  }
}
