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
import { ListarBeneficiarioComponent } from './beneficiario/listar-beneficiario/listar-beneficiario.component';
import { CrearBeneficiarioComponent } from './beneficiario/crear-beneficiario/crear-beneficiario.component';
import { EditarBeneficiarioComponent } from './beneficiario/editar-beneficiario/editar-beneficiario.component';
import { EliminarBeneficiarioComponent } from './beneficiario/eliminar-beneficiario/eliminar-beneficiario.component';
import { ListarClientePlanComponent } from './cliente-plan/listar-cliente-plan/listar-cliente-plan.component';
import { CrearClientePlanComponent } from './cliente-plan/crear-cliente-plan/crear-cliente-plan.component';
import { EditarClientePlanComponent } from './cliente-plan/editar-cliente-plan/editar-cliente-plan.component';
import { EliminarClientePlanComponent } from './cliente-plan/eliminar-cliente-plan/eliminar-cliente-plan.component';

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
  },
  {
    path: "beneficiario-listar",
    component: ListarBeneficiarioComponent
  },
  {
    path:"beneficiario-agregar",
    component: CrearBeneficiarioComponent
  },
  {
    path:"beneficiario-editar/:id",
    component: EditarBeneficiarioComponent
  },
  {
    path:"beneficiario-eliminar/:id",
    component: EliminarBeneficiarioComponent
  },
  {
    path: "cliente-plan-listar",
    component: ListarClientePlanComponent
  },
  {
    path:"cliente-plan-agregar",
    component: CrearClientePlanComponent
  },
  {
    path:"cliente-plan-editar/:id",
    component: EditarClientePlanComponent
  },
  {
    path:"cliente-plan-eliminar/:id",
    component: EliminarClientePlanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
