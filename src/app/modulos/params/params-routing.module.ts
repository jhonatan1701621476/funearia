import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarServicioComponent } from './servicio/listar-servicio/listar-servicio.component';
import { CrearServicioComponent } from './servicio/crear-servicio/crear-servicio.component';
import { EditarServicioComponent } from './servicio/editar-servicio/editar-servicio.component';
import { EliminarServicioComponent } from './servicio/eliminar-servicio/eliminar-servicio.component';
import { ListarClienteComponent } from '../parametros/cliente/listar-cliente/listar-cliente.component';
import { EditarClienteComponent } from '../parametros/cliente/editar-cliente/editar-cliente.component';
import { CrearClienteComponent } from '../parametros/cliente/crear-cliente/crear-cliente.component';
import { EliminarClienteComponent } from '../parametros/cliente/eliminar-cliente/eliminar-cliente.component';

const routes: Routes = [
  {
    path: "servicio-listar",
    component: ListarServicioComponent
  },
  {
    path: "servicio-editar/:id",
    component: EditarServicioComponent
  },
  {
    path: "servicio-crear",
    component: CrearServicioComponent
  },
  {
    path: "servicio-eliminar/:id",
    component: EliminarServicioComponent
  },
  {
    path: "cliente-listar",
    component: ListarClienteComponent
  },
  {
    path: "cliente-editar/:id",
    component: EditarClienteComponent
  },
  {
    path: "cliente-crear",
    component: CrearClienteComponent
  },
  {
    path: "cliente-eliminar/:id",
    component: EliminarClienteComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParamsRoutingModule { }
