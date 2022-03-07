import got from "got";

export abstract class BaseClient {
  constructor(private readonly key: string) {}

  protected client = got.extend({
    prefixUrl: "https://eapi.ssgadm.com",
    headers: {
      Authorization: this.key,
      Accept: "application/json",
    },
    responseType: "json",
  });

  public abstract call(params: any): Promise<any>;
}
