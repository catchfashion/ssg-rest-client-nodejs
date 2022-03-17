// THIS FILE IS AUTO-GENERATED. DO NOT EDIT THIS FILE DIRECTLY.
// Edit generator/client-generator.ts if you want to make any changes.
import type { Response } from "got";
import { BaseClient } from "../client";

export type InsertTourItemRequestParams = {
  insertTourItem?: {
    itemNm: string;
    brandId: string;
    stdCtgId: string;
    sites?: Array<{
      site?: {
        siteNo: string;
        sellStatCd: string;
      };
    }>;
    itemAplRngTypeCd?: string;
    b2eAplRngCd?: string;
    b2cAplRngCd?: string;
    itemChrctDivCd: string;
    itemChrctDtlCd: string;
    exusItemDivCd: string;
    exusItemDtlCd: string;
    dispAplRngTypeCd: string;
    dispCtgs?: Array<{
      dispCtg?: {
        siteNo: string;
        dispCtgId: string;
      };
    }>;
    dispStrtDts: string;
    dispEndDts: string;
    srchPsblYn: string;
    itemSrchwdNm?: string;
    minOnetOrdPsblQty: number;
    maxOnetOrdPsblQty: number;
    max1dyOrdPsblQty: number;
    adultItemTypeCd: string;
    buyFrmCd: string;
    txnDivCd: string;
    prcMngMthd?: string;
    salesPrcInfos?: Array<{
      uitemPrc?: {
        splprc: number;
        sellprc: number;
        mrgrt: number;
      };
    }>;
    invMngYn: string;
    invQtyMarkgYn: string;
    itemSellTypeCd: string;
    itemSellTypeDtlCd: string;
    shppMainCd: string;
    shppMthdCd: string;
    splVenItemId?: string;
    itemImgs?: Array<{
      imgInfo?: {
        dataSeq: number;
        dataFileNm: string;
        rplcTextNm: string;
      };
    }>;
    tourItemRedirectUrlPc: string;
    tourItemRedirectUrlMobile: string;
  };
};

export type InsertTourItemResponseParams = {
  result: {
    resultCode: string;
    resultMessage: string;
    resultDesc: string;
    itemId?: string;
  };
};

// render client
export class Client extends BaseClient {
  public async call(params: InsertTourItemRequestParams): Promise<Response<InsertTourItemResponseParams>> {
    return await this.client<InsertTourItemResponseParams>("tourItem/0.1/insertTourItem.ssg", {
      method: "post",
      json: params,
    });
  }
}