import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PerguntaRespostaServiceBase } from "./base/perguntaResposta.service.base";

@Injectable()
export class PerguntaRespostaService extends PerguntaRespostaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
