import { PerguntaResposta as TPerguntaResposta } from "../api/perguntaResposta/PerguntaResposta";

export const PERGUNTARESPOSTA_TITLE_FIELD = "id";

export const PerguntaRespostaTitle = (record: TPerguntaResposta): string => {
  return record.id?.toString() || String(record.id);
};
