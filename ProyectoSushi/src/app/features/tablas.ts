import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Table {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagenUrl: string;
}
@Injectable({
  providedIn: 'root'
})
export class TableService { 
  
  
  private apiUrl = 'http://localhost:8000/api/tables'; 

  constructor(private http: HttpClient) {}

  getTables(): Observable<Table[]> {
    return this.http.get<Table[]>(this.apiUrl);
  }
}