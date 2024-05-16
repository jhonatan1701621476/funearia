import { MenuModel } from "./menu.model";
import { UsuarioModel } from "./usuario.model";

export class UsuarioValidadoModel {
    user?: UsuarioModel;
    token?: string = "";
    menu?: MenuModel[];
    
}