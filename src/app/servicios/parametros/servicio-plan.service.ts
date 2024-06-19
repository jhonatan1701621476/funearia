import { Injectable } from '@angular/core';
import { ConfiguracionRutasBackend } from '../../config/configuracion.rutas.backend';
import { HttpClient } from '@angular/common/http';
import { PaginadorPlanModel } from '../../modelos/paginador.plan.model';
import { Observable } from 'rxjs';
import { ConfiguracionPaginacion } from '../../config/configuracion.paginacion';
import { ServicioPlanModel } from '../../modelos/servicio-plan.model';
import { PaginadorServicioPlanModel } from '../../modelos/paginador.servicio-plan.model';
import { ArchivoModel } from '../../modelos/archivo.model';
import { SeguridadService } from '../seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class ServicioPlanService {
  token =""; // Aquí se almacenará el token de autenticación
  urlBase: string = ConfiguracionRutasBackend.urlNegocio;
  constructor(private http: HttpClient , private servicioseguridad: SeguridadService) {
    this.token = this.servicioseguridad.ObtenerTokenLocalStorage();
  }

  /**
   * Listado de ServicioPlan
   * @returns
   */

  listarRegistros(pag: number):Observable<PaginadorServicioPlanModel>{
    let limit = ConfiguracionPaginacion.registrosPorPagina;
    let skip = (pag - 1) * limit;
    return this.http.get<PaginadorServicioPlanModel>(`${this.urlBase}servicio-plan?filter={"limit":${limit}, "skip":${skip}, "order":"id DESC"}`);
  }

  AgregarRegistro(registro: ServicioPlanModel):Observable<ServicioPlanModel>{
    return this.http.post(`${this.urlBase}servicio-plan`, registro);
  }

  EditarRegistro(registro: ServicioPlanModel):Observable<ServicioPlanModel>{
    return this.http.put(`${this.urlBase}servicio-plan/${registro.id}`, registro);
  }

  CargarArchivo(formData: FormData): Observable<ArchivoModel> {
    return this.http.post<ArchivoModel>(`${this.urlBase}cargar-archivo-servicio-plan`, formData);
  }

  BuscarRegistro(id: number): Observable<ServicioPlanModel>{
    return this.http.get<ServicioPlanModel>(`${this.urlBase}servicio-plan/${id}`);
  }

  EliminarRegistro(id: number): Observable<any>{
    return this.http.delete<any>(`${this.urlBase}servicio-plan/${id}`);
  }

}
