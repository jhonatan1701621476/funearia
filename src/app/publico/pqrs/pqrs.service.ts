import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PqrsService {
  private apiUrl = '//crear-pqrs';  // Asegúrate de que este sea el endpoint correcto en tu backend

  constructor(private http: HttpClient) { }

  enviarPqrs(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData);
  }
}
