import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SessaoDeEstudoServiceBase } from "./base/sessaoDeEstudo.service.base";

@Injectable()
export class SessaoDeEstudoService extends SessaoDeEstudoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
