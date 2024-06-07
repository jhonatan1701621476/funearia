import { Component } from '@angular/core';
import { ConfiguracionRutasBackend } from '../../../../config/configuracion.rutas.backend';
import { ParametrosService } from '../../../../servicios/parametros/servicios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanModel } from '../../../../modelos/plan.model';

@Component({
  selector: 'app-eliminar-servicio',
  templateUrl: './eliminar-servicio.component.html',
  styleUrl: './eliminar-servicio.component.css'
})
export class EliminarServicioComponent {

  BASE_URL: String = ConfiguracionRutasBackend.urlNegocio;
  recordId: number = 0;
  nombre: String = '';
  cantidadBeneficiario: String = '';
  detalle: String = '';
  valorPlan: String = '';
  estado: String = '';

  constructor(
    private servicio: ParametrosService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.recordId = this.route.snapshot.params["id"];
   }

  ngOnInit(): void {
    this.BuscarRegistro();
  }

  BuscarRegistro(){
    this.servicio.BuscarRegistro(this.recordId).subscribe({
      next: (datos: PlanModel) =>{
        this.recordId = datos.id!;
        this.nombre= datos.nombrePlan!;
        this.cantidadBeneficiario = datos.cantidadBeneficiario!;
        this.detalle = datos.detalle!;
        this.valorPlan = datos.valorPlan!;
        this.estado = datos.estado!;
      },
      error: (err) =>{
        alert("El registro no existe")
      }
    });
  }

  EliminarRegistro() {
    this.servicio.EliminarRegistro(this.recordId).subscribe({
      next: (data: any) => {
        alert("Información eliminada correctamente");
        this.router.navigate(['/parametros/servicio-listar']);
      },
      error: (err: any) => {
        alert("Ha ocurrido un error");
      }
    })
  }

  

}
