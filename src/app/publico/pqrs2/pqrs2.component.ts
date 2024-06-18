import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pqrs2Service } from './pqrs2.service';



@Component({
  selector: 'app-pqrs',
  templateUrl: './pqrs2.component.html',
  styleUrls: ['./pqrs2.component.css']
})
export class PqrsComponent {

  pqrsForm: FormGroup;
  confirmationMessage: string | null = null;
  pqrs2Form!: FormGroup<any>;

  constructor(private fb: FormBuilder, private pqrs2Service: Pqrs2Service) {
    this.pqrsForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.email]],
      asunto: ['', Validators.required],
      mensaje: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.pqrsForm.valid) {
      this.pqrs2Service.enviarPqrs(this.pqrsForm.value).subscribe(
        (        response: any) => {
          this.confirmationMessage = '¡Gracias por tu PQRS! Hemos recibido tu solicitud.';
          this.pqrsForm.reset();
        },
        (        error: any) => {
          this.confirmationMessage = 'Ocurrió un error al enviar tu PQRS. Por favor, intenta de nuevo más tarde.';
        }
      );
    }
  }
}
  





