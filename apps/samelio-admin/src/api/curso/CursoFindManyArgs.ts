import { CursoWhereInput } from "./CursoWhereInput";
import { CursoOrderByInput } from "./CursoOrderByInput";

export type CursoFindManyArgs = {
  where?: CursoWhereInput;
  orderBy?: Array<CursoOrderByInput>;
  skip?: number;
  take?: number;
};
