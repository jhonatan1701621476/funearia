import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PqrsService } from './pqrs.service';



@Component({
  selector: 'app-pqrs',
  templateUrl: './pqrs.component.html',
  styleUrls: ['./pqrs.component.css']
})
export class PqrsComponent {

  pqrsForm: FormGroup;
  confirmationMessage: string | null = null;

  constructor(private fb: FormBuilder, private pqrsService: PqrsService) {
    this.pqrsForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.email]],
      asunto: ['', Validators.required],
      mensaje: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.pqrsForm.valid) {
      this.pqrsService.enviarPqrs(this.pqrsForm.value).subscribe(
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
  





