import { text } from "../../../../shared/validation";

export function parseBusca(params: Record<string, string>): string {
  return text(params, "q");
}
