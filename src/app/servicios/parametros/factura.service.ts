import { Injectable } from '@angular/core';
import { ConfiguracionRutasBackend } from '../../config/configuracion.rutas.backend';
import { HttpClient } from '@angular/common/http';
import { SeguridadService } from '../seguridad.service';
import { Observable } from 'rxjs';
import { ConfiguracionPaginacion } from '../../config/configuracion.paginacion';
import { PaginadorFacturaModel } from '../../modelos/paginador.factura.model';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  urlBase: string = ConfiguracionRutasBackend.urlNegocio;
  constructor(private http: HttpClient, private servicioseguridad: SeguridadService) { }

  listarRegistros(pag: number):Observable<PaginadorFacturaModel>{
    let limit = ConfiguracionPaginacion.registrosPorPagina;
    let skip = (pag - 1) * limit;
    let url = `${this.urlBase}factura?filter={"include":[{"relation":"clientePlan", "scope":{"include":[{"relation":"cliente"}]}}], "limit":${limit}, "skip":${skip}}`;
    return this.http.get<PaginadorFacturaModel>(url);

  }
}
