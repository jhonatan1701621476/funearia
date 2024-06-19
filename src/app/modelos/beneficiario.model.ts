import { ClienteModel } from "./cliente.model";

export class BeneficiarioModel{
  id?: number;
  nombre?: string;
  primerApellido?: string;
  segundoApellido?: string;
  parentesco?: string;
  correo?: string;
  celular?: number;
  direccion?: string;
  fechaRegistro?: string;
  foto?: string;
  clienteId?: number;
  cliente?: ClienteModel;
}
