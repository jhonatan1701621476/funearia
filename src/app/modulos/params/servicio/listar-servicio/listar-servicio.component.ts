import { Component } from '@angular/core';
import { ParametrosService } from '../../../../servicios/parametros/servicios.service';
import { PlanModel } from '../../../../modelos/plan.model';
import { ConfiguracionPaginacion } from '../../../../config/configuracion.paginacion';

@Component({
  selector: 'app-listar-servicio',
  templateUrl: './listar-servicio.component.html',
  styleUrl: './listar-servicio.component.css'
})
export class ListarServicioComponent {
  ListaRegistros: PlanModel[] = [];
  pag = 1;
  total = 0;
  registroPorPagina = ConfiguracionPaginacion.registrosPorPagina;

  constructor(
    private parametrosService: ParametrosService
  ) {

  }

  ngOnInit(){
    this.ListarRegistros();
  }

  ListarRegistros(){
    this.parametrosService.listarRegistrosPaginados(this.pag).subscribe({
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
