// THIS FILE IS AUTO-GENERATED. DO NOT EDIT THIS FILE DIRECTLY.
// Edit generator/client-generator.ts if you want to make any changes.
import type { Response } from "got";
import { BaseClient } from "../client";

export type UpdateItemRequestParams = {
  updateItem?: {
    itemId?: string;
    itemNm?: string;
    mtlglItemInfos?: Array<{
      mtlglItem?: {
        langDivCd: string;
        mtlglItemNm?: string;
      };
    }>;
    mdlNm?: string;
    deleteMdlNmYn?: string;
    brandId?: string;
    sites: Array<{
      site: {
        siteNo: string;
        sellStatCd: string;
      };
    }>;
    itemAplRngTypeCd?: string;
    b2eAplRngCd?: string;
    b2cAplRngCd?: string;
    itemChrctDivCd?: string;
    itemChrctDtlCd?: string;
    exusItemDivCd?: string;
    exusItemDtlCd?: string;
    dispAplRngTypeCd?: string;
    speSalestrNo?: string;
    sellStatCd?: string;
    itemMngPropClsId?: string;
    ItemMngAttrs?: Array<{
      ItemMngAttr?: {
        itemMngPropId: string;
        itemMngCntt: string;
      };
    }>;
    manufcoNm?: string;
    prodManufCntryId?: string;
    dispCtgs: Array<{
      dispCtg: {
        siteNo: string;
        delYn?: string;
        dispCtgId: string;
      };
    }>;
    dispStrtDts: string;
    dispEndDts: string;
    spDispCtgs?: Array<{
      dispCtg?: {
        siteNo: string;
        delYn?: string;
        dispCtgId: string;
      };
    }>;
    srchPsblYn?: string;
    itemSrchwdNm?: string;
    aplMbrGrdCd?: string;
    minOnetOrdPsblQty?: number;
    maxOnetOrdPsblQty?: number;
    max1dyOrdPsblQty?: number;
    adultItemTypeCd: string;
    hriskItemYn?: string;
    nitmAplYn?: string;
    sellPnts?: Array<{
      sellPnt?: {
        siteNo: string;
        sellpntId: string;
        sellpntNm: string;
        dispStrtDts: string;
        dispEndDts: string;
        useYn: "Yes" | "No";
      };
    }>;
    sellCapaUnitCd?: string;
    sellTotCapa?: number;
    sellUnitCapa?: number;
    sellUnitQty?: number;
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
    b2ePrcAplTgts?: Array<{
      b2ePrcAplTgt?: {
        b2eMbrcoId: string;
        b2eSplprc: number;
        b2eSellprc: number;
        b2eMrgrt: number;
      };
    }>;
    invMngYn?: string;
    baseInvQty?: number;
    invQtyMarkgYn?: string;
    rsvSaleInfo?: {
      aplStrtDt: string;
      aplEndDt: string;
      whoutStrtDt: string;
      rstctInvQty: number;
      rsvSaleEndTp: string;
    };
    itemSellTypeCd?: string;
    barcd?: string;
    uitemAttr?: {
      uitemCacOptnYn: string;
      uitemOptnChoiTypeCd1: string;
      uitemOptnExpsrTypeCd1: string;
      uitemOptnChoiTypeCd2?: string;
      uitemOptnExpsrTypeCd2?: string;
      uitemOptnChoiTypeCd3?: string;
      uitemOptnExpsrTypeCd3?: string;
      uitemOptnChoiTypeCd4?: string;
      uitemOptnExpsrTypeCd4?: string;
      uitemOptnChoiTypeCd5?: string;
      uitemOptnExpsrTypeCd5?: string;
    };
    uitems?: Array<{
      uitem?: {
        uitemId?: string;
        tempUitemId?: string;
        barcd?: string;
        uitemOptnTypeNm1?: string;
        uitemOptnNm1?: string;
        uitemOptnTypeNm2?: string;
        uitemOptnNm2?: string;
        uitemOptnTypeNm3?: string;
        uitemOptnNm3?: string;
        uitemOptnTypeNm4?: string;
        uitemOptnNm4?: string;
        uitemOptnTypeNm5?: string;
        uitemOptnNm5?: string;
        sellStatCd?: string;
        baseInvQty?: number;
        rstctInvQty?: number;
        useYn: "Yes" | "No";
        splVenItemId?: string;
      };
    }>;
    uitemOptnAddts?: Array<{
      uitemOptnAddt: {
        uitemOptnNm: string;
        uitemOptnNo: string;
        uitemOptnIptTypeCd: string;
        dataFileNm: string;
        useYn: "Yes" | "No";
      };
    }>;
    itemOrdOptns?: Array<{
      itemOrdOptn?: {
        addOrdOptnSeq: string;
        addOrdOptnNm: string;
        addOrdOptnMndtyYn?: string;
        delYn?: string;
      };
    }>;
    uitemEaitemOptnCac?: {
      eaitemOptnCacNm1?: string;
      eaitemMinCacUnitVal1?: number;
      eaitemMaxCacUnitVal1?: number;
      cmakeMesurUnitCd1?: string;
      eaitemOptnCacNm2?: string;
      eaitemMinCacUnitVal2?: number;
      eaitemMaxCacUnitVal2?: number;
      purchUnitQty?: number;
      punitSellprc?: number;
    };
    uitemPluralPrcs?: Array<{
      uitemPrc?: {
        tempUitemId?: string;
        uitemId?: string;
        splprc: number;
        sellprc: number;
        mrgrt: number;
      };
    }>;
    chgUitemPluralPrcs?: Array<{
      uitemPrc?: {
        tempUitemId?: string;
        uitemId?: string;
        splprc: number;
        sellprc: number;
        mrgrt: number;
      };
    }>;
    returnUitemPluralPrcs?: Array<{
      uitemPrc?: {
        tempUitemId?: string;
        uitemId?: string;
        splprc: number;
        sellprc: number;
        mrgrt: number;
      };
    }>;
    shppItemDivCd?: string;
    exprtCntryId?: string;
    retExchPsblYn?: string;
    shppMainCd?: string;
    shppMthdCd?: string;
    mareaShppYn?: string;
    jejuShppDisabYn: string;
    ismtarShppDisabYn: string;
    shppRqrmDcnt?: number;
    shppRqrmDcntChngRsnCntt?: string;
    splVenItemId?: string;
    whoutShppcstId?: string;
    retShppcstId?: string;
    ismtarAddShppcstId?: string;
    jejuAddShppcstId?: string;
    whoutAddrId?: string;
    snbkAddrId?: string;
    itemTotWgt?: number;
    hopeShppDdDivCd?: string;
    hopeShppDdEndDts?: string;
    itemImgs?: Array<{
      imgInfo?: {
        dataSeq: number;
        dataFileNm: string;
        rplcTextNm: string;
        delYn?: string;
      };
    }>;
    qualityViewImgs?: Array<{
      imgInfo?: {
        dataSeq: number;
        dataFileNm: string;
        rplcTextNm: string;
        delYn?: string;
      };
    }>;
    itemDesc?: string;
    sizeDesc?: string;
    purchGuideCntt?: string;
    asMemoCntt?: string;
    qualityFiles?: Array<{
      qualityFile?: {
        itemDescDivCd: string;
        imgFileNm: string;
        delYn?: string;
      };
    }>;
    certificationProps?: Array<{
      prop?: {
        itemAppePropClsId: string;
        itemAppePropId: string;
        itemAppePropCntt: string;
      };
    }>;
    giftPsblYn?: string;
    shppMsgId?: string;
    vodExtnlPathUrl?: string;
    palimpItemYn?: string;
    itemSellWayCd?: string;
    itemStatTypeCd?: string;
    whinNotiYn?: string;
    fstPriceInfo?: {
      fstSellprc?: number;
      dataFileNm?: string;
    };
    book?: {
      isbn?: string;
      isbnExtensClsCd?: string;
      bookEngNm?: string;
      ortitlNm?: string;
      subtitlNm?: string;
      authorNm?: string;
      trltpeNm?: string;
      pubscoNm?: string;
      pageCntCntt?: string;
      pubsDt?: string;
      fxprc?: number;
      fxprcCurrCd?: string;
      appxBeingYn?: string;
      appxCntt?: string;
      tbcnttCntt?: string;
      authorIntroCntt?: string;
      trltpeIntroCntt?: string;
      prfaceCntt?: string;
      pubscoBkrevwCntt?: string;
      bookFxprcRegmAplYn?: string;
      bookItemDivCd?: string;
      limitGrdNm?: string;
      etcCntt?: string;
      addGuideCntt?: string;
      sellScr?: number;
      bookCpnNo?: string;
      bookCpnDcAmt?: number;
    };
    giftPackPsblYn?: string;
    ctvatInclYn?: string;
    tags?: Array<{
      tag?: {
        tagNm?: string;
        delYn?: string;
      };
    }>;
    itemTripPropClsId?: string;
    itemTripAttrs?: Array<{
      itemTripAttr?: {
        itemTripPropId?: string;
        itemTripPropCntt?: string;
        delYn?: string;
      };
    }>;
    luxprGantItemYn?: string;
    ipotRptNo?: string;
  };
};

export type UpdateItemResponseParams = {
  result: {
    resultCode: string;
    resultMessage: string;
    resultDesc: string;
    uitems?: Array<{
      uitem?: {
        uitemId: string;
        uitemOptnTypeCd1?: string;
        uitemOptnTypeNm1: string;
        uitemOptnNm1: string;
        uitemOptnTypeCd2?: string;
        uitemOptnTypeNm2?: string;
        uitemOptnNm2?: string;
        uitemOptnTypeCd3?: string;
        uitemOptnTypeNm3?: string;
        uitemOptnNm3?: string;
        uitemOptnTypeCd4?: string;
        uitemOptnTypeNm4?: string;
        uitemOptnNm4?: string;
        uitemOptnTypeCd5?: string;
        uitemOptnTypeNm5?: string;
        uitemOptnNm5?: string;
        baseInvQty?: number;
        rstctInvQty?: number;
        useYn: "Yes" | "No";
      };
    }>;
  };
};

// render client
export class Client extends BaseClient {
  public async call(params: UpdateItemRequestParams): Promise<Response<UpdateItemResponseParams>> {
    return await this.client<UpdateItemResponseParams>("item/0.3/updateItem.ssg", {
      method: "post",
      json: params,
    });
  }
}