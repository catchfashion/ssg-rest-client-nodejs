// THIS FILE IS AUTO-GENERATED. DO NOT EDIT THIS FILE DIRECTLY.
// Edit generator/client-generator.ts if you want to make any changes.
import type { Response } from "got";
import { BaseClient } from "../client";

export type DisplayCategoryRequestParams = {
  dispCtgId?: string;
  dispCtgNm?: string;
  siteNo?: string;
  dispCtgClsCd?: string;
  page?: number;
  pageSize?: number;
};

export type DisplayCategoryResponseParams = {
  result: {
    resultCode: string;
    resultMessage: string;
    resultDesc: string;
    displayCategorys?: Array<{
      category?: {
        dispCtgId: string;
        dispCtgNm: string;
        dispCtgClsCd: string;
        dispCtgClsNm: string;
        dispCtgPathNm: string;
        aplSiteNo: string;
        aplSiteNoNm: string;
        dispCtgLastLvlYn: string;
        dispYn: string;
      };
    }>;
  };
};

// render client
export class Client extends BaseClient {
  public async call(params: DisplayCategoryRequestParams): Promise<Response<DisplayCategoryResponseParams>> {
    return await this.client<DisplayCategoryResponseParams>("common/0.1/displayCategory.ssg", {
      method: "get",
      searchParams: params,
    });
  }
}
