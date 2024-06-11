import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosRoutingModule } from './parametros-routing.module';
import { EliminarClienteComponent } from './cliente/eliminar-cliente/eliminar-cliente.component';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { ListarClienteComponent } from './cliente/listar-cliente/listar-cliente.component';
import { ListarServicioComponent } from './servicio/listar-servicio/listar-servicio.component';
import { CrearServicioComponent } from '../params/servicio/crear-servicio/crear-servicio.component';
import { EditarServicioComponent } from '../params/servicio/editar-servicio/editar-servicio.component';
import { EliminarServicioComponent } from '../params/servicio/eliminar-servicio/eliminar-servicio.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearBeneficiarioComponent } from './beneficiario/crear-beneficiario/crear-beneficiario.component';
import { EditarBeneficiarioComponent } from './beneficiario/editar-beneficiario/editar-beneficiario.component';
import { EliminarBeneficiarioComponent } from './beneficiario/eliminar-beneficiario/eliminar-beneficiario.component';
import { ListarBeneficiarioComponent } from './beneficiario/listar-beneficiario/listar-beneficiario.component';
import { CrearClientePlanComponent } from './cliente-plan/crear-cliente-plan/crear-cliente-plan.component';
import { EditarClientePlanComponent } from './cliente-plan/editar-cliente-plan/editar-cliente-plan.component';
import { EliminarClientePlanComponent } from './cliente-plan/eliminar-cliente-plan/eliminar-cliente-plan.component';
import { ListarClientePlanComponent } from './cliente-plan/listar-cliente-plan/listar-cliente-plan.component';
import { CrearFacturaComponent } from './factura/crear-factura/crear-factura.component';
import { EditarFacturaComponent } from './factura/editar-factura/editar-factura.component';
import { EliminarFacturaComponent } from './factura/eliminar-factura/eliminar-factura.component';
import { ListarFacturaComponent } from './factura/listar-factura/listar-factura.component';
import { CrearResenasComponent } from './resenas/crear-resenas/crear-resenas.component';
import { EditarResenasComponent } from './resenas/editar-resenas/editar-resenas.component';
import { EliminarResenasComponent } from './resenas/eliminar-resenas/eliminar-resenas.component';
import { ListarResenasComponent } from './resenas/listar-resenas/listar-resenas.component';
import { ListarServicioPlanComponent } from './servicio-plan/listar-servicio-plan/listar-servicio-plan.component';
import { CrearServicioPlanComponent } from './servicio-plan/crear-servicio-plan/crear-servicio-plan.component';
import { EditarServicioPlanComponent } from './servicio-plan/editar-servicio-plan/editar-servicio-plan.component';
import { EliminarServicioPlanComponent } from './servicio-plan/eliminar-servicio-plan/eliminar-servicio-plan.component';
import { ListarSolicitudesComponent} from './solicitudes/listar-solicitudes/listar-solicitudes.component';
import { CrearSolicitudesComponent } from './solicitudes/crear-solicitudes/crear-solicitudes.component';
import { EditarSolicitudesComponent } from './solicitudes/editar-solicitudes/editar-solicitudes.component';
import { EliminarSolicitudesComponent } from './solicitudes/eliminar-solicitudes/eliminar-solicitudes.component';


@NgModule({
  declarations: [
    EliminarClienteComponent,
    CrearClienteComponent,
    EditarClienteComponent,
    ListarClienteComponent,
    ListarServicioComponent,
    CrearServicioComponent,
    EditarServicioComponent,
    EliminarServicioComponent,
    CrearBeneficiarioComponent,
    EditarBeneficiarioComponent,
    EliminarBeneficiarioComponent,
    ListarBeneficiarioComponent,
    CrearClientePlanComponent,
    EditarClientePlanComponent,
    EliminarClientePlanComponent,
    ListarClientePlanComponent,
    CrearFacturaComponent,
    EditarFacturaComponent,
    EliminarFacturaComponent,
    ListarFacturaComponent,
    CrearResenasComponent,
    EditarResenasComponent,
    EliminarResenasComponent,
    ListarResenasComponent,
    ListarServicioPlanComponent,
    CrearServicioPlanComponent,
    EditarServicioPlanComponent,
    EliminarServicioPlanComponent,
    ListarSolicitudesComponent,
    CrearSolicitudesComponent,
    EditarSolicitudesComponent,
    EliminarSolicitudesComponent,
  ],
  imports: [
    CommonModule,
    ParametrosRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ParametrosModule { }
