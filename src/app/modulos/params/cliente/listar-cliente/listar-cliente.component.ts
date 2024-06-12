import { Component } from '@angular/core';
import { ClienteModel } from '../../../../modelos/cliente.model';
import { ConfiguracionPaginacion } from '../../../../config/configuracion.paginacion';
import { ClientesService } from '../../../../servicios/parametros/clientes.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrl: './listar-cliente.component.css'
})
export class ListarClienteComponent {
  listaRegistros: ClienteModel[] = [];
  pag = 1;
  total = 0;
  registroPorPagina = ConfiguracionPaginacion.registrosPorPagina;
  constructor(
    private servicioCliente: ClientesService
  ) {

  }

  ngOnInit(){
    this.ListarRegistros();
  }

  ListarRegistros(){
    this.servicioCliente.listarRegistros(this.pag).subscribe({
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
