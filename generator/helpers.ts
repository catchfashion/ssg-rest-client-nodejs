export function toJSON<T>(text: string): T {
  // @note ssg api return non-json text.
  return eval(`(${text})`) as T;
}
