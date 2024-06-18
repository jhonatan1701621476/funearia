import { Component } from '@angular/core';
import { SeguridadService } from '../../../servicios/seguridad.service';
import { ItemMenuModel } from '../../../modelos/item.menu.model';
import { ConfiguracionMenuLateral } from '../../../config/configuracion.menu.lateral';

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
    let menusBackend = this.servicioSeguridad.ObtenerItemsMenuLateral();
    let menusConfiguracion = ConfiguracionMenuLateral.listaMenus;
    menusConfiguracion.forEach(menuConfiguracion => {
      if (menusBackend.find(menuBackend => menuBackend.menuId === menuConfiguracion.id)){
        this.listaMenus.push(menuConfiguracion);
      }
    });
    console.log(menusBackend)
    console.log(this.listaMenus)
    
    iniciarMenuLateral();
  }

}
