// THIS FILE IS AUTO-GENERATED. DO NOT EDIT THIS FILE DIRECTLY.
// Edit generator/index-generator.ts if you want to make any changes.

import * as getItemList from "./get-item-list";
import * as insertItem from "./insert-item";
import * as updateItem from "./update-item";
import * as viewItem from "./view-item";
export { getItemList };
export { insertItem };
export { updateItem };
export { viewItem };

export function createClients(key: string) {
  return {
    getItemList: new getItemList.Client(key),
    insertItem: new insertItem.Client(key),
    updateItem: new updateItem.Client(key),
    viewItem: new viewItem.Client(key),
  };
}
