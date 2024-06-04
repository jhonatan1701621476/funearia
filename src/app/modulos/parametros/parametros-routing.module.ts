import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarServicioComponent } from './servicio/listar-servicio/listar-servicio.component';
import { CrearServicioComponent } from './servicio/crear-servicio/crear-servicio.component';
import { EditarServicioComponent } from './servicio/editar-servicio/editar-servicio.component';
import { EliminarServicioComponent } from './servicio/eliminar-servicio/eliminar-servicio.component';
import { ListarClienteComponent } from './cliente/listar-cliente/listar-cliente.component';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from './cliente/eliminar-cliente/eliminar-cliente.component';

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
  },
  {
    path: "cliente-listar",
    component: ListarClienteComponent
  },
  {
    path:"cliente-agregar",
    component: CrearClienteComponent
  },
  {
    path:"cliente-editar/:id",
    component: EditarClienteComponent
  },
  {
    path:"cliente-eliminar/:id",
    component: EliminarClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
