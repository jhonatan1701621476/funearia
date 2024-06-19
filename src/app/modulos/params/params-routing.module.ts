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
import { ListarClientePlanComponent } from './cliente-plan/listar-cliente-plan/listar-cliente-plan.component';
import { EditarClientePlanComponent } from './cliente-plan/editar-cliente-plan/editar-cliente-plan.component';
import { CrearClientePlanComponent } from './cliente-plan/crear-cliente-plan/crear-cliente-plan.component';
import { EliminarClientePlanComponent } from './cliente-plan/eliminar-cliente-plan/eliminar-cliente-plan.component';
import { ListarFacturaComponent } from './factura/listar-factura/listar-factura.component';
import { EditarFacturaComponent } from './factura/editar-factura/editar-factura.component';
import { CrearFacturaComponent } from './factura/crear-factura/crear-factura.component';
import { EliminarFacturaComponent } from './factura/eliminar-factura/eliminar-factura.component';
import { ListarResenasComponent } from './resenas/listar-resenas/listar-resenas.component';
import { EditarResenasComponent } from './resenas/editar-resenas/editar-resenas.component';
import { CrearResenasComponent } from './resenas/crear-resenas/crear-resenas.component';
import { EliminarResenasComponent } from './resenas/eliminar-resenas/eliminar-resenas.component';
import { ListarSalaVelacionComponent } from './sala-velacion/listar-sala-velacion/listar-sala-velacion.component';
import { CrearSalaVelacionComponent } from './sala-velacion/crear-sala-velacion/crear-sala-velacion.component';
import { EditarSalaVelacionComponent } from './sala-velacion/editar-sala-velacion/editar-sala-velacion.component';
import { EliminarSalaVelacionComponent } from './sala-velacion/eliminar-sala-velacion/eliminar-sala-velacion.component';
import { ListarSedesFunerariasComponent } from './sedes-funerarias/listar-sedes-funerarias/listar-sedes-funerarias.component';
import { EditarSedesFunerariasComponent } from './sedes-funerarias/editar-sedes-funerarias/editar-sedes-funerarias.component';
import { CrearSedesFunerariasComponent } from './sedes-funerarias/crear-sedes-funerarias/crear-sedes-funerarias.component';
import { EliminarSedesFunerariasComponent } from './sedes-funerarias/eliminar-sedes-funerarias/eliminar-sedes-funerarias.component';
import { ListarSolicitudesComponent } from './solicitudes/listar-solicitudes/listar-solicitudes.component';
import { ComprarServicioComponent } from './servicio/comprar-servicio/comprar-servicio.component';
import { ListarServicioPlanComponent } from './servicio-plan/listar-servicio-plan/listar-servicio-plan.component';

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
    path: "servicio-comprar",
    component: ComprarServicioComponent
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
  {
    path: "cliente-plan-listar",
    component: ListarClientePlanComponent
  },
  {
    path: "cliente-plan-editar/:id",
    component: EditarClientePlanComponent
  },
  {
    path: "cliente-plan-crear",
    component: CrearClientePlanComponent
  },
  {
    path: "cliente-plan-eliminar/:id",
    component: EliminarClientePlanComponent
  },
  {
    path: "factura-listar",
    component: ListarFacturaComponent
  },
  {
    path: "factura-editar/:id",
    component: EditarFacturaComponent
  },
  {
    path: "factura-crear",
    component: CrearFacturaComponent
  },
  {
    path: "factura-eliminar/:id",
    component: EliminarFacturaComponent
  },
  {
    path: "resena-listar",
    component: ListarResenasComponent
  },
  {
    path: "resena-editar/:id",
    component: EditarResenasComponent
  },
  {
    path: "resena-crear",
    component: CrearResenasComponent
  },
  {
    path: "resena-eliminar/:id",
    component: EliminarResenasComponent
  },
  {
    path: "sala-velacion-listar",
    component: ListarSalaVelacionComponent
  },
  {
    path: "sala-velacion-crear",
    component: CrearSalaVelacionComponent
  },
  {
    path: "sala-velacion-editar/:id",
    component: EditarSalaVelacionComponent
  },
  {
    path: "sala-velacion-eliminar/:id",
    component: EliminarSalaVelacionComponent
  },
  {
    path: "sedes-funeraria-listar",
    component: ListarSedesFunerariasComponent
  },
  {
    path: "sedes-funerarias-editar/:id",
    component: EditarSedesFunerariasComponent
  },
  {
    path: "sedes-funerarias-crear",
    component: CrearSedesFunerariasComponent
  },
  {
    path: "sedes-funerarias-eliminar/:id",
    component: EliminarSedesFunerariasComponent
  },
  {
    path: "solicitudes-listar",
    component: ListarSolicitudesComponent
  },
  {
    path: "servicio-plan-listar",
    component: ListarServicioPlanComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParamsRoutingModule { }
