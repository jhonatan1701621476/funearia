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
    EliminarBeneficiarioComponent
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
