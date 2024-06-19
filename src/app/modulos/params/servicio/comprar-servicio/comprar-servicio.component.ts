import { Component } from '@angular/core';
import { PlanModel } from '../../../../modelos/plan.model';
import { ConfiguracionPaginacion } from '../../../../config/configuracion.paginacion';
import { ParametrosService } from '../../../../servicios/parametros/servicios.service';

@Component({
  selector: 'app-comprar-servicio',
  templateUrl: './comprar-servicio.component.html',
  styleUrl: './comprar-servicio.component.css'
})
export class ComprarServicioComponent {
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
