export function toJSON<T>(text: string): T {
  const parsedText = text
    .replace(/'\s*\+\s*'/g, "") // remove concat
    .replace(/[&<>"']/g, (elem) => {
      return { "'": "\"" }[elem] ?? elem;
    }) // change to single to double quote
    .replace(/columnAlias/g, "\"columnAlias\"") // to json field
    .replace(/\,(?!\s*?[\{\[\"\'\w])/g, "") // remove trailing comma
    .replace(/\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g, (m, g) => g ? "" : m); // remove json comment

  // console.log(parsedText);

  return JSON.parse(parsedText) as T;
}
