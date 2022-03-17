// THIS FILE IS AUTO-GENERATED. DO NOT EDIT THIS FILE DIRECTLY.
// Edit generator/client-generator.ts if you want to make any changes.
import type { Response } from "got";
import { BaseClient } from "../client";

export type GetItemAppeCertPropsRequestParams = { stdCtgId: string };

export type GetItemAppeCertPropsResponseParams = {
  result: {
    resultCode: string;
    resultMessage: string;
    resultDesc: string;
    itemAppeCerts?: Array<{
      itemAppeCert?: {
        itemAppePropClsId: string;
        itemAppePropClsNm: string;
        itemAppePropId: string;
        itemAppePropNm: string;
        itemAppePropTypeCd: string;
        itemAppePropDtlTypeCd: string;
        repPropTypeCd?: string;
        repPropCntt?: string;
        maxIptVal?: string;
        mndtyYn: string;
        prcdAppePropId?: string;
        prcdAppePropCntt?: string;
      };
    }>;
  };
};

// render client
export class Client extends BaseClient {
  public async call(params: GetItemAppeCertPropsRequestParams): Promise<Response<GetItemAppeCertPropsResponseParams>> {
    return await this.client<GetItemAppeCertPropsResponseParams>("/attribute/itemAppeCert/getItemAppeCertProps.ssg", {
      method: "get",
      searchParams: params,
    });
  }
}