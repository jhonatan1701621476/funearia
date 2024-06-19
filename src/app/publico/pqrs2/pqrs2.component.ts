import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pqrs2Service } from './pqrs2.service';



@Component({
  selector: 'app-pqrs2',
  templateUrl: './pqrs2.component.html',
  styleUrls: ['./pqrs2.component.css']
})
export class Pqrs2Component {

  pqrs2Form: FormGroup;
  confirmationMessage: string | null = null;

  constructor(private fb: FormBuilder, private pqrs2Service: Pqrs2Service) {
    this.pqrs2Form = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.email]],
      asunto: ['', Validators.required],
      mensaje: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.pqrs2Form.valid) {
      this.pqrs2Service.enviarPqrs(this.pqrs2Form.value).subscribe(
        (        response: any) => {
          this.confirmationMessage = '¡Gracias por tu PQRS! Hemos recibido tu solicitud.';
          this.pqrs2Form.reset();
        },
        (        error: any) => {
          this.confirmationMessage = 'Ocurrió un error al enviar tu PQRS. Por favor, intenta de nuevo más tarde.';
        }
      );
    }
  }
}
  





