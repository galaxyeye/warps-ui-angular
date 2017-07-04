/**
  * Created by vincent on 17-6-15.
  * Copyright @ 2013-2017 Warpspeed Information. All rights reserved
  */
export class Seed {
  url: string = "";
  log: number = 0;
  fetchInterval: number = 0;
  fetchPriority: number = 1000;
  score: number = 0;
  depth: number = 1;
  zoneId: string = "Asia/Shanghai";
  urlDom: string = "body";
  keywords: Map<string, string> = new Map<string, string>();
  indexUrl: string;

  anchorMinLength: number = 4;
  anchorMaxLength: number = 50;
  urlMinLength: number = 11;
  urlMaxLength: number = 200;

  urlPrefix: string;
  urlContain: string;
  urlPostfix: string;
  urlRegex: string;
}
