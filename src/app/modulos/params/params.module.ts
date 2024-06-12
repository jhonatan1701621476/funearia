import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParamsRoutingModule } from './params-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarServicioComponent } from './servicio/listar-servicio/listar-servicio.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EditarServicioComponent } from './servicio/editar-servicio/editar-servicio.component';
import { CrearServicioComponent } from './servicio/crear-servicio/crear-servicio.component';
import { EliminarServicioComponent } from './servicio/eliminar-servicio/eliminar-servicio.component';
import { ListarClienteComponent } from '../parametros/cliente/listar-cliente/listar-cliente.component';
import { EditarClienteComponent } from '../parametros/cliente/editar-cliente/editar-cliente.component';
import { CrearClienteComponent } from '../parametros/cliente/crear-cliente/crear-cliente.component';
import { EliminarClienteComponent } from '../parametros/cliente/eliminar-cliente/eliminar-cliente.component';


@NgModule({
  declarations: [
    ListarServicioComponent,
    EditarServicioComponent,
    CrearServicioComponent,
    EliminarServicioComponent,
    ListarClienteComponent,
    EditarClienteComponent,
    CrearClienteComponent,
    EliminarClienteComponent
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
