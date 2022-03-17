// THIS FILE IS AUTO-GENERATED. DO NOT EDIT THIS FILE DIRECTLY.
// Edit generator/client-generator.ts if you want to make any changes.
import type { Response } from "got";
import { BaseClient } from "../client";

export type UpdateTourItemRequestParams = {
  updateTourItem?: {
    itemId?: string;
    itemNm?: string;
    brandId?: string;
    sellStatCd?: string;
    sites: Array<{
      site?: {
        siteNo: string;
        sellStatCd: string;
      };
    }>;
    b2eAplRngCd?: string;
    b2cAplRngCd?: string;
    itemChrctDivCd?: string;
    itemChrctDtlCd?: string;
    exusItemDivCd?: string;
    exusItemDtlCd?: string;
    dispAplRngTypeCd?: string;
    dispCtgs: Array<{
      dispCtg?: {
        siteNo: string;
        dispCtgId: string;
      };
    }>;
    dispStrtDts?: string;
    dispEndDts?: string;
    srchPsblYn?: string;
    itemSrchwdNm?: string;
    minOnetOrdPsblQty?: number;
    maxOnetOrdPsblQty?: number;
    max1dyOrdPsblQty?: number;
    adultItemTypeCd?: string;
    prcMngMthd?: string;
    salesPrcInfos?: Array<{
      uitemPrc?: {
        splprc: number;
        sellprc: number;
        mrgrt: number;
      };
    }>;
    chgSalesPrcInfos?: Array<{
      uitemPrc?: {
        splprc: number;
        sellprc: number;
        mrgrt: number;
        aplStrtDts: string;
      };
    }>;
    returnSalesPrcInfos?: Array<{
      uitemPrc?: {
        splprc: number;
        sellprc: number;
        mrgrt: number;
        aplStrtDts: string;
      };
    }>;
    invMngYn?: string;
    invQtyMarkgYn?: string;
    itemSellTypeCd?: string;
    itemSellTypeDtlCd?: string;
    shppMainCd?: string;
    shppMthdCd?: string;
    splVenItemId?: string;
    itemImgs?: Array<{
      imgInfo?: {
        dataSeq: number;
        dataFileNm: string;
        rplcTextNm: string;
      };
    }>;
    tourItemRedirectUrlPc?: string;
    tourItemRedirectUrlMobile?: string;
  };
};

export type UpdateTourItemResponseParams = {
  result: {
    resultCode: string;
    resultMessage: string;
    resultDesc: string;
  };
};

// render client
export class Client extends BaseClient {
  public async call(params: UpdateTourItemRequestParams): Promise<Response<UpdateTourItemResponseParams>> {
    return await this.client<UpdateTourItemResponseParams>("tourItem/0.1/updateTourItem.ssg", {
      method: "post",
      json: params,
    });
  }
}
