import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-resenas',
  templateUrl: './listar-resenas.component.html',
  styleUrl: './listar-resenas.component.css'
})
export class ListarResenasComponent {
listaRegistros: any;
registroPorPagina: string|number|undefined;
pag: string|number|undefined;
ListarRegistros: any;
total: string|number|undefined;

}
