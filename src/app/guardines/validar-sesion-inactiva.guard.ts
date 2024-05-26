import { Injectable, inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SeguridadService } from '../servicios/seguridad.service';


export const ValidarSesionInactivaGuard = () => {

  const servicioSeguridad = inject(SeguridadService);
  const router = inject(Router);

  let existeSesion = servicioSeguridad.validacionDeSesion();
    if (existeSesion) {
      return false;
    }  
    router.navigate(["/inicio"]);
    return true;

}
