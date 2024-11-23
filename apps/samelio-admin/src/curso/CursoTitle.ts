import { Curso as TCurso } from "../api/curso/Curso";

export const CURSO_TITLE_FIELD = "id";

export const CursoTitle = (record: TCurso): string => {
  return record.id?.toString() || String(record.id);
};
