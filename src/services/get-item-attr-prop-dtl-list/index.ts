// THIS FILE IS AUTO-GENERATED. DO NOT EDIT THIS FILE DIRECTLY.
// Edit generator/client-generator.ts if you want to make any changes.
import type { Response } from "got";
import { BaseClient } from "../client";

export type GetItemAttrPropDtlListRequestParams = { itemAppePropId: string };

export type GetItemAttrPropDtlListResponseParams = {
  result: {
    resultCode: string;
    resultMessage: string;
    resultDesc: string;
    itemAppePropDtls?: Array<{
      itemAppePropDtl?: {
        itemAppePropId: string;
        itemAppePropDtlId: string;
        itemAppePropDtlNm: string;
        itemAppePropDtlEngNm: string;
      };
    }>;
  };
};

// render client
export class Client extends BaseClient {
  public async call(
    params: GetItemAttrPropDtlListRequestParams,
  ): Promise<Response<GetItemAttrPropDtlListResponseParams>> {
    return await this.client<GetItemAttrPropDtlListResponseParams>("itemAttr/0.1/getItemAppePropDtlList.ssg", {
      method: "get",
      searchParams: params,
    });
  }
}
