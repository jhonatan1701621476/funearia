import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarServicioComponent } from './servicio/listar-servicio/listar-servicio.component';
import { CrearServicioComponent } from './servicio/crear-servicio/crear-servicio.component';
import { EditarServicioComponent } from './servicio/editar-servicio/editar-servicio.component';
import { EliminarServicioComponent } from './servicio/eliminar-servicio/eliminar-servicio.component';
import { ListarClienteComponent } from '../params/cliente/listar-cliente/listar-cliente.component';
import { EditarClienteComponent } from '../params/cliente/editar-cliente/editar-cliente.component';
import { CrearClienteComponent } from '../params/cliente/crear-cliente/crear-cliente.component';
import { EliminarClienteComponent } from '../params/cliente/eliminar-cliente/eliminar-cliente.component';
import { ListarBeneficiarioComponent } from '../params/beneficiario/listar-beneficiario/listar-beneficiario.component';
import { EditarBeneficiarioComponent } from '../params/beneficiario/editar-beneficiario/editar-beneficiario.component';
import { CrearBeneficiarioComponent } from '../params/beneficiario/crear-beneficiario/crear-beneficiario.component';
import { EliminarBeneficiarioComponent } from '../params/beneficiario/eliminar-beneficiario/eliminar-beneficiario.component';

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
  {
    path: "beneficiario-listar",
    component: ListarBeneficiarioComponent
  },
  {
    path: "beneficiario-editar/:id",
    component: EditarBeneficiarioComponent
  },
  {
    path: "beneficiario-crear",
    component: CrearBeneficiarioComponent
  },
  {
    path: "beneficiario-eliminar/:id",
    component: EliminarBeneficiarioComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParamsRoutingModule { }
