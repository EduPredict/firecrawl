import { Module } from "@nestjs/common";
import { SessaoDeEstudoModuleBase } from "./base/sessaoDeEstudo.module.base";
import { SessaoDeEstudoService } from "./sessaoDeEstudo.service";
import { SessaoDeEstudoController } from "./sessaoDeEstudo.controller";
import { SessaoDeEstudoResolver } from "./sessaoDeEstudo.resolver";

@Module({
  imports: [SessaoDeEstudoModuleBase],
  controllers: [SessaoDeEstudoController],
  providers: [SessaoDeEstudoService, SessaoDeEstudoResolver],
  exports: [SessaoDeEstudoService],
})
export class SessaoDeEstudoModule {}
