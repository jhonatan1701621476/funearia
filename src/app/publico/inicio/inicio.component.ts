import { Component } from '@angular/core';
import { PlanModel } from '../../modelos/plan.model';
import { ParametrosService } from '../../servicios/parametros.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  listaRegistros: PlanModel[] = [];
  mostrarContenido: boolean = false; // Variable para mostrar u ocultar contenido

  constructor(
    private servicioParametrizacion: ParametrosService
  ) {
    
  }

  ngOnInit() {
    this.servicioParametrizacion.listarRegistros().subscribe({
      next: (datos) => {
        this.listaRegistros = datos;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  // Método para mostrar contenido
  mostrarPlanes() {
    this.mostrarContenido = true;
  }
}
