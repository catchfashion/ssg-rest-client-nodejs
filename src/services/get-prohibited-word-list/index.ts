// THIS FILE IS AUTO-GENERATED. DO NOT EDIT THIS FILE DIRECTLY.
// Edit generator/client-generator.ts if you want to make any changes.
import type { Response } from "got";
import { BaseClient } from "../client";

export type GetProhibitedWordListRequestParams = { stdCtgMclsId: string; page?: number; pageSize?: number };

export type GetProhibitedWordListResponseParams = {
  result: {
    resultCode: string;
    resultMessage: string;
    resultDesc: string;
    prohibitWords?: Array<{
      prohibited?: {
        prohibitedWord: string;
      };
    }>;
  };
};

// render client
export class Client extends BaseClient {
  public async call(
    params: GetProhibitedWordListRequestParams,
  ): Promise<Response<GetProhibitedWordListResponseParams>> {
    return await this.client<GetProhibitedWordListResponseParams>("venInfo/0.1/getProhibitedWordList.ssg", {
      method: "get",
      searchParams: params,
    });
  }
}
