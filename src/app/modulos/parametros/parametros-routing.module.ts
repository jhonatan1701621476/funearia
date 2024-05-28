import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarServicioComponent } from './servicio/listar-servicio/listar-servicio.component';
import { CrearServicioComponent } from './servicio/crear-servicio/crear-servicio.component';
import { EditarServicioComponent } from './servicio/editar-servicio/editar-servicio.component';
import { EliminarServicioComponent } from './servicio/eliminar-servicio/eliminar-servicio.component';

const routes: Routes = [
  {
    path: "servicio-listar",
    component: ListarServicioComponent
  },
  {
    path:"servicio-agregar",
    component: CrearServicioComponent
  },
  {
    path:"servicio-editar/:id",
    component: EditarServicioComponent
  },
  {
    path:"servicio-eliminar/:id",
    component: EliminarServicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
