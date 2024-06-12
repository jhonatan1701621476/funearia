import { Component } from '@angular/core';
import { FacturaModel } from '../../../../modelos/factura.model';
import { ConfiguracionPaginacion } from '../../../../config/configuracion.paginacion';
import { FacturaService } from '../../../../servicios/parametros/factura.service';

@Component({
  selector: 'app-listar-factura',
  templateUrl: './listar-factura.component.html',
  styleUrl: './listar-factura.component.css'
})
export class ListarFacturaComponent {
  listaRegistros: FacturaModel[] = [];
  pag = 1;
  total = 0;
  registroPorPagina = ConfiguracionPaginacion.registrosPorPagina;
  constructor(
    private servicioFactura: FacturaService
  ) {

  }

  ngOnInit(){
    this.ListarRegistros();
  }

  ListarRegistros(){
    this.servicioFactura.listarRegistros(this.pag).subscribe({
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
