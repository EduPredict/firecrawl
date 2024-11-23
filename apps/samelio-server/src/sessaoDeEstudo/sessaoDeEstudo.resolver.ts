import * as graphql from "@nestjs/graphql";
import { SessaoDeEstudoResolverBase } from "./base/sessaoDeEstudo.resolver.base";
import { SessaoDeEstudo } from "./base/SessaoDeEstudo";
import { SessaoDeEstudoService } from "./sessaoDeEstudo.service";

@graphql.Resolver(() => SessaoDeEstudo)
export class SessaoDeEstudoResolver extends SessaoDeEstudoResolverBase {
  constructor(protected readonly service: SessaoDeEstudoService) {
    super(service);
  }
}
