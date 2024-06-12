import { Injectable } from '@angular/core';
import { ConfiguracionRutasBackend } from '../../config/configuracion.rutas.backend';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfiguracionPaginacion } from '../../config/configuracion.paginacion';
import { ClientePlanModel } from '../../modelos/cliente-plan.model';
import { PaginadorClientePlanModel } from '../../modelos/paginador.cliente.plan.model';

@Injectable({
  providedIn: 'root'
})
export class ClientePlanService {

  urlBase: string = ConfiguracionRutasBackend.urlNegocio;
  constructor(private http: HttpClient) { }

  listarRegistros():Observable<ClientePlanModel[]>{
    return this.http.get<ClientePlanModel[]>(`${this.urlBase}cliente-plan?filter={"limit":${ConfiguracionPaginacion.registrosPorPagina}}`);
  }

  listarRegistrosPaginados(pag: number):Observable<PaginadorClientePlanModel>{
    let limit = ConfiguracionPaginacion.registrosPorPagina;
    let skip = (pag - 1) * limit;
    return this.http.get<PaginadorClientePlanModel>(`${this.urlBase}cliente-plan-paginado?filter={"limit":${limit}, "skip":${skip}, "order":"id DESC"}`);
  }

}
