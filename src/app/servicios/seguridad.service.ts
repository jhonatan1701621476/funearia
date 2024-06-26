import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UsuarioModel } from '../modelos/usuario.model';
import { HttpClient } from '@angular/common/http';
import { ConfiguracionRutasBackend } from '../config/configuracion.rutas.backend';
import { UsuarioValidadoModel } from '../modelos/usuario.validado.model';
import { PermisoModel } from '../modelos/permiso.model';
import { ItemMenuModel } from '../modelos/item.menu.model';
import { ConfiguracionMenuLateral } from '../config/configuracion.menu.lateral';
import { MenuModel } from '../modelos/menu.model';
import { json } from 'body-parser';

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
  IdentificarUsuario(usuario: string, clave: string): Observable<UsuarioModel> {
    return this.http.post<UsuarioModel>( `${this.urlBase}identificar-usuario`, {
      correo: usuario,
      clave: clave
    });
  }

  /**
   * Almacena los datos del usuario
   * @param datos datos del usuario
   */
  AlmacenarDatosUsuarioIdentificado(datos:UsuarioModel): boolean{
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
   * Cerrando Sesión
   */
  RemoverDatosUsuarioValidado() {
    let datosUsuario = localStorage.getItem("datos-usuario");
    let datosSesion = localStorage.getItem("datos-sesion");
    if(datosUsuario) {
      localStorage.removeItem("datos-usuario");
    }
    if(datosSesion) {
      localStorage.removeItem("datos-sesion");
    }
    localStorage.removeItem("menu-lateral");
    this.ActualizarComportamientoUsuario(new UsuarioValidadoModel());
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
      Codigo2fa: codigo
    });
  }

  RegistrarUsuarioPublico(datos: any): Observable<UsuarioModel>{
    return this.http.post<UsuarioModel>(`${this.urlBase}usuario-publico`, datos);
  }

  ValidarHashUsuarioPublico(hash: string): Observable<boolean> {
    return this.http.post<boolean>(`${this.urlBase}validar-hash-usuario`, {
      codigoHash: hash
    });
  }

  /**
   * Guarada en local storage la información del usuario valido
   * @param datos datos del usuario validado
   * @returns respuesta
   */
  AlmacenarDatosUsuarioValidado(datos: UsuarioValidadoModel): boolean {
    let datosLS = localStorage.getItem("datos-sesion");
    if(datosLS != null){
      return false;
    }else{
      let datosString = JSON.stringify(datos);
      localStorage.setItem("datos-sesion", datosString);
      this.ActualizarComportamientoUsuario(datos);
      return true;
    }
  }
  CambiarClavePorUsuario(usuario: string, claveActual: string, nuevaClave: string): Observable<UsuarioModel> {
    return this.http.post<UsuarioModel>(`${this.urlBase}cambiar-clave`, {
      usuario: usuario,
      claveActual : claveActual,
      nuevaClave: nuevaClave
    });
  } 

  RecuperarClavePorUsuario(usuario: string): Observable<UsuarioModel> {
    return this.http.post<UsuarioModel>(`${this.urlBase}recuperar-clave`, {
      correo: usuario,
    });
  }

  /** Administracion de la sesion de usuario */

  datosUsuarioValidado = new BehaviorSubject<UsuarioValidadoModel>(new UsuarioValidadoModel());

  ObtenerDatosSesion():Observable<UsuarioValidadoModel> {
    return this.datosUsuarioValidado.asObservable();
  }

  validacionDeSesion():UsuarioValidadoModel | null {
    let ls = localStorage.getItem("datos-sesion");
    if(ls){
      let objUsuario = JSON.parse(ls);
      this.ActualizarComportamientoUsuario(objUsuario);
      return objUsuario;
      }
      return null;
    }

  ActualizarComportamientoUsuario(datos: UsuarioValidadoModel) {
    return this.datosUsuarioValidado.next(datos);
  }

  ConstruirMenuLateral(permisos: MenuModel[]) {
    let menu: ItemMenuModel[]=[];

    permisos.forEach((permiso) => {
      let datosRuta = ConfiguracionMenuLateral.listaMenus.filter(x => x.id == permiso.menuId);
      if (datosRuta.length > 0) {
        let menu: ItemMenuModel[]=[]

        let item = new ItemMenuModel();
        item.idMenu = permiso.menuId;
        item.ruta = datosRuta[0].ruta;
        item.icono = datosRuta[0].icono;
        item.texto = datosRuta[0].texto;
        menu.push(item);
      }
    });
    this.AlmacenarItemsMenuLateral(menu);
  }

  /**
   *
   * @param itemsMenu items del menu al guardar en local storage
   */
  AlmacenarItemsMenuLateral(itemsMenu: ItemMenuModel[]) {
    let menuStr = JSON.stringify(itemsMenu);
    localStorage.setItem("menu-lateral", menuStr);
  }

  /**
   *
   * @returns lista con items del menu
   */
  ObtenerItemsMenuLateral():MenuModel[] {
    let menu: MenuModel[] = [];
    let datosSesion = localStorage.getItem("datos-sesion");
    if(datosSesion) {
      let usuario: UsuarioValidadoModel = JSON.parse(datosSesion); 
       menu = usuario?.menu;
    }
    console.log(menu)
    return menu;
  }

  ObtenerTokenLocalStorage():string{
    let ls = localStorage.getItem("datos-sesion");
    if (ls){
      let usuario: UsuarioValidadoModel = JSON.parse(ls);
      return usuario.token!;
    }else{
      return "";
    }
  }

}
