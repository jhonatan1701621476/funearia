import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarServicioComponent } from './servicio/listar-servicio/listar-servicio.component';
import { CrearServicioComponent } from './servicio/crear-servicio/crear-servicio.component';
import { EditarServicioComponent } from './servicio/editar-servicio/editar-servicio.component';

const routes: Routes = [
  {
    path: "servicio-listar",
    component: ListarServicioComponent
  },
  {
    path: "servicio-editar",
    component: EditarServicioComponent
  },
  {
    path: "servicio-crear",
    component: CrearServicioComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParamsRoutingModule { }
