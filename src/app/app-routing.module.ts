import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './publico/inicio/inicio.component';
import { RutaNoEncontradaComponent } from './publico/errores/ruta-no-encontrada/ruta-no-encontrada.component';
import { Pqrs2Component } from './publico/pqrs2/pqrs2.component';

const routes: Routes = [
  {
    path: "inicio",
    component: InicioComponent
  },
  {
    path:'pqrs2',
    component: Pqrs2Component
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/inicio"
  },
  {
    path: "seguridad",
    loadChildren: () => import("./modulos/seguridad/seguridad.module").then(m => m.SeguridadModule)
  },
  {
    path: "params",
    loadChildren: () => import("./modulos/params/params.module").then(m => m.ParamsModule)
  },
  {
    path: "reportes",
    loadChildren: () => import("./modulos/reportes/reportes.module").then(m => m.ReportesModule)
  },
  {
    path: "solicitudes",
    loadChildren: () => import("./modulos/solicitudes/solicitudes.module").then(m => m.SolicitudesModule)
  },
  {
    path: "**",
    component: RutaNoEncontradaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
