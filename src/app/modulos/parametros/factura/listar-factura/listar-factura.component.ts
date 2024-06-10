import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-factura',
  templateUrl: './listar-factura.component.html',
  styleUrl: './listar-factura.component.css'
})
export class ListarFacturaComponent {
listaRegistros: any;
registroPorPagina: string|number|undefined;
pag: string|number|undefined;
total: string|number|undefined;
ListarRegistros: any;

}
