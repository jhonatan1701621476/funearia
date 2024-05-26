import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SeguridadService } from '../servicios/seguridad.service';


@Injectable({
  providedIn: 'root'
})
export class ValidarSesionActivaGuard implements CanActivate {

  constructor(
    private servicioSeguridad: SeguridadService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let existeSesion = this.servicioSeguridad.validacionDeSesion();
    if (existeSesion) {
      return true;
    }  
    this.router.navigate(["/inicio"]);
    return false;
  }
}
