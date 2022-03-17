export function toJSON<T>(text: string): T {
  // @note ssg api return non-json text.
  // @see https://eapi.ssgadm.com/resources/js/info/ssgApi.js
  return eval(`(${text})`) as T;
}
