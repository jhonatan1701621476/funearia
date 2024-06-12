import { Component } from '@angular/core';
import { ResenasModel } from '../../../../modelos/resenas.model';
import { ConfiguracionPaginacion } from '../../../../config/configuracion.paginacion';
import { ResenasService } from '../../../../servicios/parametros/resenas.service';

@Component({
  selector: 'app-listar-resenas',
  templateUrl: './listar-resenas.component.html',
  styleUrl: './listar-resenas.component.css'
})
export class ListarResenasComponent {
  listaRegistros: ResenasModel[] = [];
  pag = 1;
  total = 0;
  registroPorPagina = ConfiguracionPaginacion.registrosPorPagina;
  constructor(
    private servicioResena: ResenasService
  ) {

  }

  ngOnInit(){
    this.ListarRegistros();
  }

  ListarRegistros(){
    this.servicioResena.listarRegistros(this.pag).subscribe({
      next: (datos) =>{
        this.listaRegistros = datos.registros;
        this.total = datos.totalRegistros;
      },
      error: (err) =>{
        alert('Error al cargar los datos');
      }
    });
  }

}
