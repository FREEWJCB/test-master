import { queryString } from 'object-query-string';

export function encodeParams(object: Record<string, unknown>): string {
  return queryString(object, {
    separator: '&',
    encode: encodeURIComponent,
    encodeBrackets: false,
  });
}
