import { Module } from "@nestjs/common";
import { CursoModuleBase } from "./base/curso.module.base";
import { CursoService } from "./curso.service";
import { CursoController } from "./curso.controller";
import { CursoResolver } from "./curso.resolver";

@Module({
  imports: [CursoModuleBase],
  controllers: [CursoController],
  providers: [CursoService, CursoResolver],
  exports: [CursoService],
})
export class CursoModule {}
