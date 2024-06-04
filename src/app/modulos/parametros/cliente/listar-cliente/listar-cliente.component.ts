import { Component } from '@angular/core';
import { PaginadorClienteModel } from '../../../../modelos/paginador.cliente.model';
import { ClientesService } from '../../../../servicios/parametros/clientes.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrl: './listar-cliente.component.css'
})
export class ListarClienteComponent {
  ListaRegistros: PaginadorClienteModel = new PaginadorClienteModel();
  pag = 1;
  constructor(
    private servicio: ClientesService
  ) {

  }

  ngOnInit(){
    this.servicio.listarRegistros(this.pag).subscribe({
      next: (datos) =>{
        this.ListaRegistros = datos;
      },
      error: (err) =>{
        alert('Error al cargar los datos');
      }
    });
  }
}
