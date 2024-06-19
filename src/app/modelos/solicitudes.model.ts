import { BeneficiarioModel } from "./beneficiario.model";
import { SedesFunerariasModel } from "./sedes-funerarias.model";

export class solicitudesModel{
    id?: number;
    fechaSolicitud?: string;
    observaciones?: string;
    estadoSolicitud?: string;
    beneficiarioId?: number;
    sedesFunerariaId?: number;
    beneficiario?: BeneficiarioModel;
    sedesFuneraria?: SedesFunerariasModel;

}