import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlanModel } from '../../modelos/plan.model';
import { Observable } from 'rxjs';
import { ConfiguracionRutasBackend } from '../../config/configuracion.rutas.backend';
import { ConfiguracionPaginacion } from '../../config/configuracion.paginacion';
import { PaginadorPlanModel } from '../../modelos/paginador.plan.model';
import { ArchivoModel } from '../../modelos/archivo.model';

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
    return this.http.get<PlanModel[]>(`${this.urlBase}plan?filter={"limit":${ConfiguracionPaginacion.registrosPorPagina}}`);
  }

  listarRegistrosPaginados(pag: number):Observable<PaginadorPlanModel>{
    let limit = ConfiguracionPaginacion.registrosPorPagina;
    let skip = (pag - 1) * limit;
    return this.http.get<PaginadorPlanModel>(`${this.urlBase}plan-paginado?filter={"limit":${limit}, "skip":${skip}, "order":"id DESC"}`);
  }

  AgregarRegistro(registro: PlanModel):Observable<PlanModel>{
    return this.http.post(`${this.urlBase}plan`, registro);
  }

  EditarRegistro(registro: PlanModel):Observable<PlanModel>{
    return this.http.put(`${this.urlBase}plan/${registro.id}`, registro);
  }

  CargarArchivo(formData: FormData): Observable<ArchivoModel> {
    return this.http.post<ArchivoModel>(`${this.urlBase}cargar-archivo-plan`, formData);
  }

  BUscarRegistro(id: number): Observable<PlanModel>{
    return this.http.get<PlanModel>(`${this.urlBase}plan/${id}`);
  }

}

