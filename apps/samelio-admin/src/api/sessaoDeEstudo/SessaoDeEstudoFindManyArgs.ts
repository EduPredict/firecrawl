import { SessaoDeEstudoWhereInput } from "./SessaoDeEstudoWhereInput";
import { SessaoDeEstudoOrderByInput } from "./SessaoDeEstudoOrderByInput";

export type SessaoDeEstudoFindManyArgs = {
  where?: SessaoDeEstudoWhereInput;
  orderBy?: Array<SessaoDeEstudoOrderByInput>;
  skip?: number;
  take?: number;
};
