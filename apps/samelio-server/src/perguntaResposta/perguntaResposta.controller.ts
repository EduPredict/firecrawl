import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PerguntaRespostaService } from "./perguntaResposta.service";
import { PerguntaRespostaControllerBase } from "./base/perguntaResposta.controller.base";

@swagger.ApiTags("perguntaRespostas")
@common.Controller("perguntaRespostas")
export class PerguntaRespostaController extends PerguntaRespostaControllerBase {
  constructor(protected readonly service: PerguntaRespostaService) {
    super(service);
  }
}
