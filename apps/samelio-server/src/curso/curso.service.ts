import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CursoServiceBase } from "./base/curso.service.base";

@Injectable()
export class CursoService extends CursoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
