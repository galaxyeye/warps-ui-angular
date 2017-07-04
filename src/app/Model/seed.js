"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
  * Created by vincent on 17-6-15.
  * Copyright @ 2013-2017 Warpspeed Information. All rights reserved
  */
var Seed = (function () {
    function Seed() {
        this.url = "";
        this.log = 0;
        this.fetchInterval = 0;
        this.fetchPriority = 1000;
        this.score = 0;
        this.depth = 1;
        this.zoneId = "Asia/Shanghai";
        this.urlDom = "body";
        this.keywords = new Map();
        this.anchorMinLength = 4;
        this.anchorMaxLength = 50;
        this.urlMinLength = 11;
        this.urlMaxLength = 200;
    }
    return Seed;
}());
exports.Seed = Seed;
//# sourceMappingURL=seed.js.map