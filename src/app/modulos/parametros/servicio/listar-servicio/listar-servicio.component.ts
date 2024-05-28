import { Component } from '@angular/core';
import { ParametrosService } from '../../../../servicios/parametros.service';
import { PlanModel } from '../../../../modelos/plan.model';

@Component({
  selector: 'app-listar-servicio',
  templateUrl: './listar-servicio.component.html',
  styleUrl: './listar-servicio.component.css'
})
export class ListarServicioComponent {
  ListaRegistros: PlanModel[] = [];

  constructor(
    private parametrosService: ParametrosService
  ) { 
    
  }

  ngOnInit(){
    this.parametrosService.listarRegistros().subscribe({
      next: (datos) =>{
        this.ListaRegistros = datos;
      },
      error: (err) =>{
        alert('Error al cargar los datos');
      }
    });
  }
  
}
