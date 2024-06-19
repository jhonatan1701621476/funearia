import { Component } from '@angular/core';
import { ConfiguracionRutasBackend } from '../../../../config/configuracion.rutas.backend';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ParametrosService } from '../../../../servicios/parametros/servicios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanModel } from '../../../../modelos/plan.model';
import { ArchivoModel } from '../../../../modelos/archivo.model';

@Component({
  selector: 'app-diligenciar-servicio',
  templateUrl: './diligenciar-servicio.component.html',
  styleUrl: './diligenciar-servicio.component.css'
})
export class DiligenciarServicioComponent {

  nombreArchivoCargado: String = '';
  fGroup: FormGroup = new FormGroup({});
  cargaArchivoFG: FormGroup = new FormGroup({});
  archivoCargado: Boolean = false;
  BASE_URL: String = ConfiguracionRutasBackend.urlNegocio;
  recordId: number = 0;

  constructor(
    private fb: FormBuilder,
    private servicio: ParametrosService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.recordId = this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.ConstruirFormularioDatos();
    this.ConstruirFormularioArchivo();
    //this.BuscarRegistro();

  }

  /*BuscarRegistro(){
    this.servicio.BuscarRegistro(this.recordId).subscribe({
      next: (datos: PlanModel) =>{
        this.obtenerFgDatos["id"].setValue(datos.id);
        this.obtenerFgDatos["nombrePlan"].setValue(datos.nombrePlan);
        this.obtenerFgDatos["cantidadBeneficiario"].setValue(datos.cantidadBeneficiario);
        this.obtenerFgDatos["detalle"].setValue(datos.detalle);
        this.obtenerFgDatos["valorPlan"].setValue(datos.valorPlan);
        this.obtenerFgDatos["estado"].setValue(datos.estado);
       // this.nombreArchivoCargado = datos.foto!;
       // this.archivoCargado = true;
      },
      error: (err) =>{
        alert("El registro no existe")
      }
    });
  }*/

  ConstruirFormularioDatos() {
    this.fGroup = this.fb.group({
      id: ['', [Validators.required]],
      nombrePlan: ['', [Validators.required]],
      cantidadBeneficiario: ['', [Validators.required]],
      detalle: ['', [Validators.required]],
      valorPlan: ['', [Validators.required]],
      estado: ['', [Validators.required]],
    });
  }

  EditaRegistro() {
    if (this.fGroup.invalid) {
      alert("Debe diligenciar todo el formulario, incluyendo la carga del archivo.");
    } else {
      let model = this.obtenerRegistro();
      this.servicio.EditarRegistro(model).subscribe({
        next: (data: PlanModel) => {
          alert("Información modificada correctamente");
          this.router.navigate(['/params/servicio-listar']);
        },
        error: (err: any) => {
          alert("Ha ocurrido un error");
        }
      })
    }
  }

  obtenerRegistro(): PlanModel {
    let model = new PlanModel();
    model.id = parseInt(this.obtenerFgDatos["id"].value);
    model.nombrePlan = this.obtenerFgDatos["nombrePlan"].value;
    model.cantidadBeneficiario = this.obtenerFgDatos["cantidadBeneficiario"].value;
    model.detalle = this.obtenerFgDatos["detalle"].value;
    model.valorPlan = this.obtenerFgDatos["valorPlan"].value;
    model.estado = this.obtenerFgDatos["estado"].value;
    return model;
  }

  get obtenerFgDatos() {
    return this.fGroup.controls;
  }

  /** Carga de archivo */

  ConstruirFormularioArchivo() {
    this.cargaArchivoFG = this.fb.group({
      archivo: ['', []]
    });
  }

  get obtenerFgArchivo() {
    return this.cargaArchivoFG.controls;
  }

  CargarArchivo() {
    const formData = new FormData();
    formData.append('file', this.cargaArchivoFG.controls["archivo"].value);
    this.servicio.CargarArchivo(formData).subscribe({
      next: (data: ArchivoModel) => {
        console.log(data);
        this.nombreArchivoCargado = data.file;
        this.obtenerFgDatos["foto"].setValue(this.nombreArchivoCargado);
        this.archivoCargado = true;
        alert("Archivo cargado correctamente.");
      },
      error: (err: any) => {
        alert("Error cargando el archivo");
      }
    });
  }

  CuandoSeleccionaArchivo(event: any) {
    if (event.target.files.length > 0) {
      const f = event.target.files[0];
      this.obtenerFgArchivo["archivo"].setValue(f);
    }
  }
}
