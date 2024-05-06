import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UsuarioModel } from '../modelos/usuario.model';
import { HttpClient } from '@angular/common/http';
import { ConfiguracionRutasBackend } from '../config/configuracion.rutas.backend';
import { UsuarioValidadoModel } from '../modelos/usuario.validado.model';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
  urlBase: string = ConfiguracionRutasBackend.urlSeguridad;

  constructor(private http: HttpClient) { 
    this.validacionDeSesion();
  }

  /**
   * Identificar usuario
   * @param usuario
   * @param clave
   * @returns datos del usuario valido 
  */
  IdentificarUsuario(usuario: string, clave: string): Observable <UsuarioModel> {
    return this.http.post<UsuarioModel>( `${this.urlBase}identificar-usuario`, {
      correo: usuario,
      clave: clave
    });
  }

  /**
   * Almacena los datos del usuario
   * @param datos datos del usuario
   */
  AlmacenarDatosUsuarioIdentificado(datos:UsuarioModel) {
    let cadena = JSON.stringify(datos);
    let datosLS = localStorage.getItem("datos-usuario");
    if(datosLS){
      return false;
    }else{
      localStorage.setItem("datos-usuario", cadena);
      return true;
    }
  }


  /**
   * Busca los datos en localstorage de un usuario
   * @returns 
   */
  ObtenerDatosUsuarioLS():UsuarioModel | null {
    let datosLS = localStorage.getItem("datos-usuario");
    if(datosLS) {
      let datos = JSON.parse(datosLS);
      return datos;
    }else {
      return null;
    }
  }

  /**
   * Validar 2fa
   * @param idUsuario 
   * @param codigo 
   * @returns 
   */
  ValidarCodigo2FA(idUsuario: string, codigo: string): Observable <UsuarioValidadoModel> {
    return this.http.post<UsuarioValidadoModel>( `${this.urlBase}verificar-2fa`, {
      usuarioId: idUsuario,
      codigo2fa: codigo
    });
  }

  /**
   * 
   * @param datos del usuario validados guiarda en local storagelos datos 
   * del usuario validado
   * @returns respuesta
   */
  AlmacenarDatosUsuarioValidado(datos: UsuarioValidadoModel): boolean {
    let datosLS = localStorage.getItem("datos-session");
    if(datosLS != null){
      return false;
    }else{
      let datosString = JSON.stringify(datos);
      localStorage.setItem("datos-session", datosString);
      return true;
    }

  }

  /** Administracion de la sesion de usuario */

  datosUsuarioValidado = new BehaviorSubject<UsuarioValidadoModel>(new UsuarioValidadoModel());

  ObtenerDatosSesion():Observable<UsuarioValidadoModel> {
    return this.datosUsuarioValidado.asObservable();
   }

  validacionDeSesion(){
    let ls = localStorage.getItem("datos-session");
    if(ls){
      let objUsuario = JSON.parse(ls);
      this.ActualizarComportamientoUsuario(objUsuario);
      }   
    }
    
  ActualizarComportamientoUsuario(datos: UsuarioValidadoModel) {
    return this.datosUsuarioValidado.next(datos)
    }

}
