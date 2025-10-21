import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Promocion {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagenUrl: string; 
}

@Injectable({
  providedIn: 'root'
})
export class PromocionesService {
  private apiUrl = 'http://localhost:8000/api/promociones'; 

  constructor(private http: HttpClient) {}

  getPromociones(): Observable<Promocion[]> {
    return this.http.get<Promocion[]>(this.apiUrl);
  }
}