export interface Spec {
  pageTitle: string;
  contents: [Content];
  language: {
    en: APIDescription;
    ko: APIDescription;
  };
}

export interface Content {
  drawOrder: string[];
  drawItem: DrawItem;
}

export interface DrawItem {
  requestHeader: Section<HeaderProp>;
  requestURI: Section<URIProp>;
  requestApi: Section<RequestAPIProp>;
  responseApi: Section<ResponseAPIProp>;
}

export interface Section<T> {
  type: "table_simple";
  prop: T
}

export interface RequestAPIProp {
  tableId: string;
  tableName: string;
  maxLevel: number;
  simpleRows: [BaseSimpleRow, ...APIRow[]];
}

export interface BaseSimpleRow {
  simpleDatas: string[];
}

export interface APIRow extends BaseSimpleRow {
  simpleOption: {
    level: number;
    en?: { [key: string]: string }[];
    ko?: { [key: string]: string }[];
    isDel?: true | "Y";
  };
}

export interface HeaderProp {
  tableId: string;
  tableName: string;
  simpleRows: HeaderSimpleRow[];
}

export interface HeaderSimpleRow {
  simpleDatas: string[];
  simpleOption: {
    en: HeaderDescription[];
    ko: HeaderDescription[];
  };
}

export interface HeaderDescription {
  AuthorizationDesc?: string;
  AcceptDesc?: string;
}

export interface URIProp {
  tableId: string;
  tableName: string;
  simpleRows: URISimpleRow[];
}

export interface URISimpleRow extends BaseSimpleRow {
  simpleOption: {
    en: URIVersion[];
    ko: URIVersion[];
  };
}

export interface URIVersion {
  versionDesc: string;
}

export interface ResponseAPIProp {
  tableId: string;
  tableName: string;
  maxLevel: number;
  simpleRows: [BaseSimpleRow, ...APIRow[]];
}

export interface APIDescription {
  pageTitle: string;
  title1: string;
  desc1: string;
  desc2: string;
  title3: string;
  desc3: string;
  apiTitle: string;
  apiDesc: string;
  property: string;
  propertyType: string;
  required: string;
  description: string;
  updateDate: string;
  parentApi: string;
  mainApi: string;
}
