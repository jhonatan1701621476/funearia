import { Injectable } from '@angular/core';
import { ConfiguracionRutasBackend } from '../../config/configuracion.rutas.backend';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { solicitudesModel } from '../../modelos/solicitudes.model';
import { ConfiguracionPaginacion } from '../../config/configuracion.paginacion';
import { PaginadorSolicitudesModel } from '../../modelos/paginador.solicitudes.model';
import { ArchivoModel } from '../../modelos/archivo.model';
import { SeguridadService } from '../seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {
  token =""; // Aquí se almacenará el token de autenticación
  urlBase: string = ConfiguracionRutasBackend.urlNegocio;
  constructor(private http: HttpClient, private servicioseguridad: SeguridadService) {
    this.token = this.servicioseguridad.ObtenerTokenLocalStorage();
  }

  /**
   * Listado de ServicioPlan
   * @returns
   */

  listarRegistros(pag: number ):Observable<PaginadorSolicitudesModel>{
    let limit = ConfiguracionPaginacion.registrosPorPagina;
    let skip = (pag - 1) * limit;
    let url = `${this.urlBase}solicitud?filter={"limit":${limit}, "skip":${skip}, "order":"id DESC" }`;
    return this.http.get<PaginadorSolicitudesModel>(url);
  }

  AgregarRegistro(registro: solicitudesModel):Observable<solicitudesModel>{
    return this.http.post(`${this.urlBase}solicitud`, registro);
  }

  EditarRegistro(registro: solicitudesModel):Observable<solicitudesModel>{
    return this.http.put(`${this.urlBase}solicitud/${registro.id}`, registro);
  }

  CargarArchivo(formData: FormData): Observable<ArchivoModel> {
    return this.http.post<ArchivoModel>(`${this.urlBase}cargar-archivo-solicitud`, formData);
  }

  BuscarRegistro(id: number): Observable<solicitudesModel>{
    return this.http.get<solicitudesModel>(`${this.urlBase}solicitud/${id}`);
  }

  EliminarRegistro(id: number): Observable<any>{
    return this.http.delete<any>(`${this.urlBase}solicitud/${id}`);
  }
}
