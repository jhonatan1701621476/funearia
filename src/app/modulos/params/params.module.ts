import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParamsRoutingModule } from './params-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarServicioComponent } from './servicio/listar-servicio/listar-servicio.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    ListarServicioComponent
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
