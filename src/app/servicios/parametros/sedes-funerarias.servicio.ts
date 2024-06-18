import { Injectable } from '@angular/core';
import { ConfiguracionRutasBackend } from '../../config/configuracion.rutas.backend';
import { HttpClient } from '@angular/common/http';
import { SeguridadService } from '../seguridad.service';
import { Observable } from 'rxjs';
import { ConfiguracionPaginacion } from '../../config/configuracion.paginacion';

@Injectable({
  providedIn: 'root'
})
export class SedesFunerariaService{
  token =""; // Aquí se almacenará el token de autenticación
  urlBase: string = ConfiguracionRutasBackend.urlNegocio;
  constructor(private http: HttpClient, private servicioseguridad: SeguridadService) {
    this.token = this.servicioseguridad.ObtenerTokenLocalStorage();
  }

  listarRegistros(pag: number):Observable<any>{
    let limit = ConfiguracionPaginacion.registrosPorPagina;
    let skip = (pag - 1) * limit;
    let url = `${this.urlBase}sala-velacion?filter={"limit":${limit}, "skip":${skip}}`;
    return this.http.get<any>(url);

    }  
}