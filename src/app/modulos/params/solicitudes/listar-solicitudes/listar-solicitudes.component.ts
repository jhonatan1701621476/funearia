import { Component } from '@angular/core';
import { solicitudesModel } from '../../../../modelos/solicitudes.model';
import { ConfiguracionPaginacion } from '../../../../config/configuracion.paginacion';
import { ParametrosService } from '../../../../servicios/parametros/servicios.service';

@Component({
  selector: 'app-listar-solicitudes',
  templateUrl: './listar-solicitudes.component.html',
  styleUrl: './listar-solicitudes.component.css'
})

export class ListarSolicitudesComponent {
  ListaRegistros: solicitudesModel[] = [];
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
