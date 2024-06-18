import { Component } from '@angular/core';
import { SedesFunerariasModel } from '../../../../modelos/sedes-funerarias.model';
import { ConfiguracionPaginacion } from '../../../../config/configuracion.paginacion';
import { SedesFunerariaService } from '../../../../servicios/parametros/sedes-funerarias.servicio';

@Component({
  selector: 'app-listar-sedes-funerarias',
  templateUrl: './listar-sedes-funerarias.component.html',
  styleUrl: './listar-sedes-funerarias.component.css'
})
export class ListarSedesFunerariasComponent {
  
  listaRegistros: SedesFunerariasModel[] = [];
  pag = 1;
  total = 0;
  registroPorPagina = ConfiguracionPaginacion.registrosPorPagina;
  constructor(
    private servicioSalaFuneraria: SedesFunerariaService
  ) {

  }

  ngOnInit(){
    this.ListarRegistros();
  }

  ListarRegistros(){
    this.servicioSalaFuneraria.listarRegistros(this.pag).subscribe({
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
