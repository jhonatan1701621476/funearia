import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfiguracionRutasBackend } from '../../config/configuracion.rutas.backend';
import { Observable } from 'rxjs';
import { PaginadorClienteModel } from '../../modelos/paginador.cliente.model';
import { ConfiguracionPaginacion } from '../../config/configuracion.paginacion';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  urlBase: string = ConfiguracionRutasBackend.urlNegocio;
  constructor(private http: HttpClient) { }

  listarRegistros(pag: number):Observable<PaginadorClienteModel>{
    let limit = ConfiguracionPaginacion.registrosPorPagina;
    let skip = (pag - 1) * limit;
    return this.http.get<PaginadorClienteModel>(`${this.urlBase}cliente?filter={"limit":${limit}, "skip":${skip}}`);
  }
}
