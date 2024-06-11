import { Injectable } from '@angular/core';
import { ConfiguracionRutasBackend } from '../../config/configuracion.rutas.backend';
import { HttpClient } from '@angular/common/http';
import { PaginadorPlanModel } from '../../modelos/paginador.plan.model';
import { Observable } from 'rxjs';
import { ConfiguracionPaginacion } from '../../config/configuracion.paginacion';
import { ServicioPlanModel } from '../../modelos/servicio-plan.model';
import { PaginadorServicioPlanModel } from '../../modelos/paginador.servicio-plan.model';
import { ArchivoModel } from '../../modelos/archivo.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioPlanService {
  urlBase: string = ConfiguracionRutasBackend.urlNegocio;
  constructor(private http: HttpClient) { }

  /**
   * Listado de ServicioPlan
   * @returns
   */

  listarRegistros():Observable<ServicioPlanModel[]>{
    return this.http.get<ServicioPlanModel[]>(`${this.urlBase}servicio-plan?filter={"limit":${ConfiguracionPaginacion.registrosPorPagina}}`);
  }

  listarRegistrosPaginados(pag: number):Observable<PaginadorPlanModel>{
    let limit = ConfiguracionPaginacion.registrosPorPagina;
    let skip = (pag - 1) * limit;
    return this.http.get<PaginadorServicioPlanModel>(`${this.urlBase}servicio-plan-paginado?filter={"limit":${limit}, "skip":${skip}, "order":"id DESC"}`);
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
