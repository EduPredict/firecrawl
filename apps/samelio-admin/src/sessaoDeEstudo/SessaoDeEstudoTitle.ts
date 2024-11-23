import { SessaoDeEstudo as TSessaoDeEstudo } from "../api/sessaoDeEstudo/SessaoDeEstudo";

export const SESSAODEESTUDO_TITLE_FIELD = "id";

export const SessaoDeEstudoTitle = (record: TSessaoDeEstudo): string => {
  return record.id?.toString() || String(record.id);
};
