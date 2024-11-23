import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SessaoDeEstudoService } from "./sessaoDeEstudo.service";
import { SessaoDeEstudoControllerBase } from "./base/sessaoDeEstudo.controller.base";

@swagger.ApiTags("sessaoDeEstudos")
@common.Controller("sessaoDeEstudos")
export class SessaoDeEstudoController extends SessaoDeEstudoControllerBase {
  constructor(protected readonly service: SessaoDeEstudoService) {
    super(service);
  }
}
