import * as _ from "lodash";
import got from "got";

import type * as Types from "./types";
import { toJSON } from "./helpers";

export interface Service {
  name: string;
  spec: Types.Spec;
}

export class ServiceDiscovery {
  private static readonly __client = got.extend({
    prefixUrl: "https://eapi.ssgadm.com/resources/js/info",
    responseType: "text",
  });

  public static async discover(): Promise<Service[]> {
    const specList = toJSON<Types.SpecList>(
      (await this.__client.get("layout/left.json")).body,
    );

    const urls = _.chain(specList.menuList)
      .map((item) => 
        item?.list?.map((subItem) => subItem.list?.map(({ url }) => url))
          ?? item.list?.map((subItem) => subItem.url),
      ).flatten()
      .compact()
      .flatten()
      .uniq()
      .value();

    const services: Service[] = [];
    for (const url of urls) {
      const name = url.match(/\/(\w+).ssg/)![1];
      
      try {
        const { body } = await this.__client.get(`cp/${name}.json`);
        services.push({
          name: _.kebabCase(name),
          spec: toJSON<Types.Spec>(body),
        });
      } catch (e) {
        console.error(`Failed to fetch '${name}' service.`);
      }
    }
    return services;
  }
}
