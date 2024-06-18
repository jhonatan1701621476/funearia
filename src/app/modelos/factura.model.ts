import { ClientePlanModel } from "./cliente-plan.model";

export class FacturaModel{
    id?: number;
    fechaLimitePago?: string;
    clientePlanId?: number;
    clientePlan?:ClientePlanModel
  }
  