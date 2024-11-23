import * as graphql from "@nestjs/graphql";
import { PerguntaRespostaResolverBase } from "./base/perguntaResposta.resolver.base";
import { PerguntaResposta } from "./base/PerguntaResposta";
import { PerguntaRespostaService } from "./perguntaResposta.service";

@graphql.Resolver(() => PerguntaResposta)
export class PerguntaRespostaResolver extends PerguntaRespostaResolverBase {
  constructor(protected readonly service: PerguntaRespostaService) {
    super(service);
  }
}
