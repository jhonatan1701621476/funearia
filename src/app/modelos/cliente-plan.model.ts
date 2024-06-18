import { ClienteModel } from "./cliente.model";
import { PlanModel } from "./plan.model";

export class ClientePlanModel{
  id?: number;
  tarifa?: string;
  fechaInicio?: string;
  fechaFin?: string;
  clienteId?: number;
  planId?: number;
  cliente?:ClienteModel;
  plan?:PlanModel;
}
