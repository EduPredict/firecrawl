import { Module } from "@nestjs/common";
import { PerguntaRespostaModuleBase } from "./base/perguntaResposta.module.base";
import { PerguntaRespostaService } from "./perguntaResposta.service";
import { PerguntaRespostaController } from "./perguntaResposta.controller";
import { PerguntaRespostaResolver } from "./perguntaResposta.resolver";

@Module({
  imports: [PerguntaRespostaModuleBase],
  controllers: [PerguntaRespostaController],
  providers: [PerguntaRespostaService, PerguntaRespostaResolver],
  exports: [PerguntaRespostaService],
})
export class PerguntaRespostaModule {}
