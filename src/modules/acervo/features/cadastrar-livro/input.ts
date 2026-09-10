import { asObject, positiveInt, text } from "../../../../shared/validation";

export type NovoLivro = {
  isbn: string;
  titulo: string;
  autorId: number;
};

export function parseNovoLivro(body: unknown): NovoLivro {
  const data = asObject(body);

  return {
    isbn: text(data, "isbn"),
    titulo: text(data, "titulo"),
    autorId: positiveInt(data, "autorId"),
  };
}
