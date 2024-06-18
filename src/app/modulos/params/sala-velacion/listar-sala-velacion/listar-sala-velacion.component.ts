import { Component } from '@angular/core';
import { salavelacionModel } from '../../../../modelos/sala-velacion.model';
import { ConfiguracionPaginacion } from '../../../../config/configuracion.paginacion';
import { SalaVelacionService} from '../../../../servicios/parametros/sala-velacion.service';

@Component({
  selector: 'app-listar-sala-velacion',
  templateUrl: './listar-sala-velacion.component.html',
  styleUrl: './listar-sala-velacion.component.css'
})
export class ListarSalaVelacionComponent {
  
  listaRegistros: salavelacionModel[] = [];
  pag = 1;
  total = 0;
  registroPorPagina = ConfiguracionPaginacion.registrosPorPagina;
  constructor(
    private servicioSalaVelacion: SalaVelacionService
  ) {

  }

  ngOnInit(){
    this.ListarRegistros();
  }

  ListarRegistros(){
    this.servicioSalaVelacion.listarRegistros(this.pag).subscribe({
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
