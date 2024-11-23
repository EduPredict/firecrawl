import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CursoService } from "./curso.service";
import { CursoControllerBase } from "./base/curso.controller.base";

@swagger.ApiTags("cursos")
@common.Controller("cursos")
export class CursoController extends CursoControllerBase {
  constructor(protected readonly service: CursoService) {
    super(service);
  }
}
