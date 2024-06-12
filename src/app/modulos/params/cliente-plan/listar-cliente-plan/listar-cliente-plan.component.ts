import { Component } from '@angular/core';
import { ConfiguracionPaginacion } from '../../../../config/configuracion.paginacion';
import { ClientePlanModel } from '../../../../modelos/cliente-plan.model';
import { ClientePlanService } from '../../../../servicios/parametros/cliente-plan.service';

@Component({
  selector: 'app-listar-cliente-plan',
  templateUrl: './listar-cliente-plan.component.html',
  styleUrl: './listar-cliente-plan.component.css'
})
export class ListarClientePlanComponent {
  ListaRegistros: ClientePlanModel[] = [];
  pag = 1;
  total = 0;
  registroPorPagina = ConfiguracionPaginacion.registrosPorPagina;

  constructor(
    private clientePlanService: ClientePlanService
  ) {

  }

  ngOnInit(){
    this.ListarRegistros();
  }

  ListarRegistros(){
    this.clientePlanService.listarRegistrosPaginados(this.pag).subscribe({
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
