import * as path from "path";
import * as fs from "fs";

import * as Types from "./types";

export interface Service {
  name: string;
  spec: Types.Spec;
}

export class ServiceDiscovery {
  private static readonly files = [
    "get-item-list",
    "view-item",
    "insert-item",
    "update-item",
  ];

  public static async discover(): Promise<Service[]> {
    // @TODO: discover all api list
    const dir = path.resolve(__dirname, ".", "api-specs");

    return await Promise.all(this.files.map(
      async (file) => ({
        name: file,
        spec: this.specToJSON(
          await fs.readFileSync(path.resolve(dir, `${file}.txt`), "utf8"),
        ),
      }),
    ));
  }

  private static specToJSON(text: string): Types.Spec {
    const jsonString = text
      .replace(/'\s*\+\s*'/g, "") // remove concat
      .replace(/[&<>"']/g, (elem) => {
        return {
          '"': "\\\"",
          "'": "\"",
        }[elem] ?? elem;
      }) // change to single to double quote
      .replace(/columnAlias/g, "\"columnAlias\"") // to json field
      .replace(/\,(?!\s*?[\{\[\"\'\w])/g, "") // remove trailing comma
      .replace(/\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g, (m, g) => g ? "," : m); // remove json comment

    return JSON.parse(jsonString);
  }
}
