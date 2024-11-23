import * as graphql from "@nestjs/graphql";
import { CursoResolverBase } from "./base/curso.resolver.base";
import { Curso } from "./base/Curso";
import { CursoService } from "./curso.service";

@graphql.Resolver(() => Curso)
export class CursoResolver extends CursoResolverBase {
  constructor(protected readonly service: CursoService) {
    super(service);
  }
}
