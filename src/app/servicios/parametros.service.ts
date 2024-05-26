import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlanModel } from '../modelos/plan.model';
import { Observable } from 'rxjs';
import { ConfiguracionRutasBackend } from '../config/configuracion.rutas.backend';

@Injectable({
  providedIn: 'root'
})
export class ParametrosService {
  urlBase: string = ConfiguracionRutasBackend.urlNegocio;
  constructor(private http: HttpClient) { }

  /**
   * Listado de Planes
   * @returns 
   */
  listarRegistros():Observable<PlanModel[]>{
    return this.http.get<PlanModel[]>(`${this.urlBase}plan`);
  }
}
