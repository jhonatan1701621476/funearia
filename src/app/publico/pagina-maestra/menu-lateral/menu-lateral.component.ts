import { Component } from '@angular/core';
import { SeguridadService } from '../../../servicios/seguridad.service';
import { ItemMenuModel } from '../../../modelos/item.menu.model';

declare const iniciarMenuLateral: any;

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.css'
})
export class MenuLateralComponent {
  listaMenus: ItemMenuModel[] = [];
  constructor(
    private servicioSeguridad: SeguridadService
  ) {

  }

  ngOnInit() {
    this.listaMenus = this.servicioSeguridad.ObtenerItemsMenuLateral();
    iniciarMenuLateral();
  }

}
