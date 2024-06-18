import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParamsRoutingModule } from './params-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarServicioComponent } from './servicio/listar-servicio/listar-servicio.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EditarServicioComponent } from './servicio/editar-servicio/editar-servicio.component';
import { CrearServicioComponent } from './servicio/crear-servicio/crear-servicio.component';
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
import { CrearSalaVelacionComponent } from './sala-velacion/crear-sala-velacion/crear-sala-velacion.component';
import { EditarSalaVelacionComponent } from './sala-velacion/editar-sala-velacion/editar-sala-velacion.component';
import { EliminarSalaVelacionComponent } from './sala-velacion/eliminar-sala-velacion/eliminar-sala-velacion.component';
import { ListarSalaVelacionComponent } from './sala-velacion/listar-sala-velacion/listar-sala-velacion.component';
import { CrearSedesFunerariasComponent } from './sedes-funerarias/crear-sedes-funerarias/crear-sedes-funerarias.component';
import { EditarSedesFunerariasComponent } from './sedes-funerarias/editar-sedes-funerarias/editar-sedes-funerarias.component';
import { EliminarSedesFunerariasComponent } from './sedes-funerarias/eliminar-sedes-funerarias/eliminar-sedes-funerarias.component';
import { ListarSedesFunerariasComponent } from './sedes-funerarias/listar-sedes-funerarias/listar-sedes-funerarias.component';




@NgModule({
  declarations: [
    ListarServicioComponent,
    EditarServicioComponent,
    CrearServicioComponent,
    EliminarServicioComponent,
    ListarClienteComponent,
    EditarClienteComponent,
    CrearClienteComponent,
    EliminarClienteComponent,
    ListarBeneficiarioComponent,
    EditarBeneficiarioComponent,
    CrearBeneficiarioComponent,
    EliminarBeneficiarioComponent,
    ListarClientePlanComponent,
    EditarClientePlanComponent,
    CrearClientePlanComponent,
    EliminarClientePlanComponent,
    ListarFacturaComponent,
    EditarFacturaComponent,
    CrearFacturaComponent,
    EliminarFacturaComponent,
    ListarResenasComponent,
    EditarResenasComponent,
    CrearResenasComponent,
    EliminarResenasComponent,
    CrearSalaVelacionComponent,
    EditarSalaVelacionComponent,
    EliminarSalaVelacionComponent,
    ListarSalaVelacionComponent,
    CrearSedesFunerariasComponent,
    EditarSedesFunerariasComponent,
    EliminarSedesFunerariasComponent,
    ListarSedesFunerariasComponent,
  
 
  ],
  imports: [
    CommonModule,
    ParamsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class ParamsModule { }
