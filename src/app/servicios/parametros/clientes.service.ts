import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfiguracionRutasBackend } from '../../config/configuracion.rutas.backend';
import { Observable } from 'rxjs';
import { PaginadorClienteModel } from '../../modelos/paginador.cliente.model';
import { ConfiguracionPaginacion } from '../../config/configuracion.paginacion';
import { SeguridadService } from '../seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  token =""; // Aquí se almacenará el token de autenticación
  urlBase: string = ConfiguracionRutasBackend.urlNegocio;
  constructor(private http: HttpClient, private servicioseguridad: SeguridadService) {
    this.token = this.servicioseguridad.ObtenerTokenLocalStorage();
  }

  listarRegistros(pag: number):Observable<PaginadorClienteModel>{
    let limit = ConfiguracionPaginacion.registrosPorPagina;
    let skip = (pag - 1) * limit;
    let url = `${this.urlBase}cliente?filter={"limit":${limit}, "skip":${skip}}`;
    return this.http.get<PaginadorClienteModel>(url);

  }
}
