import { Component } from '@angular/core';
import { BeneficiarioModel } from '../../../../modelos/beneficiario.model';
import { ConfiguracionPaginacion } from '../../../../config/configuracion.paginacion';
import { BeneficiariosService } from '../../../../servicios/parametros/beneficiarios.service';

@Component({
  selector: 'app-listar-beneficiario',
  templateUrl: './listar-beneficiario.component.html',
  styleUrl: './listar-beneficiario.component.css'
})
export class ListarBeneficiarioComponent {
  listaRegistros: BeneficiarioModel[] = [];
  pag = 1;
  total = 0;
  registroPorPagina = ConfiguracionPaginacion.registrosPorPagina;
  constructor(
    private servicioBeneficiario: BeneficiariosService
  ) {

  }

  ngOnInit(){
    this.ListarRegistros();
  }

  ListarRegistros(){
    this.servicioBeneficiario.listarRegistros(this.pag).subscribe({
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
