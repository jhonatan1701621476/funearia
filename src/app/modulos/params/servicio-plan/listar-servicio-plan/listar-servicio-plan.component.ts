import { Component } from '@angular/core';
import { ServicioPlanModel } from '../../../../modelos/servicio-plan.model';
import { ConfiguracionPaginacion } from '../../../../config/configuracion.paginacion';
import { ServicioPlanService } from '../../../../servicios/parametros/servicio-plan.service';

@Component({
  selector: 'app-listar-servicio-plan',
  templateUrl: './listar-servicio-plan.component.html',
  styleUrl: './listar-servicio-plan.component.css'
})
export class ListarServicioPlanComponent {
  ListaRegistros: ServicioPlanModel[] = [];
  pag = 1;
  total = 0;
  registroPorPagina = ConfiguracionPaginacion.registrosPorPagina;

  constructor(
    private servicioPlanService: ServicioPlanService
  ) {

  }

  ngOnInit(){
    this.ListarRegistros();
  }

  ListarRegistros(){
    this.servicioPlanService.listarRegistros(this.pag).subscribe({
      next: (datos) =>{
        this.ListaRegistros = datos.registros;
        this.total = datos.totalRegistros;
      },
      error: (err) =>{
        alert('Error al cargar los datos');
      }
    });
  }
}
