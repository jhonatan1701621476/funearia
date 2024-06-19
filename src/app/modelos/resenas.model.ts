import { ClienteModel } from "./cliente.model";

export class ResenasModel{
    id?: number;
    comentario?: string;
    calificacion?: string;
    clienteId?: number;
    cliente?: ClienteModel;
  }
  