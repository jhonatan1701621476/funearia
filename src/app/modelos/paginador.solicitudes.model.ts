import { SolicitudesModule } from "../modulos/solicitudes/solicitudes.module";

export class PaginadorSolicitudesModel {
    totalRegistros: number = 0;
    registros: SolicitudesModule[] = [];
}