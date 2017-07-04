"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by vincent on 17-6-15.
 */
var WebPage = (function () {
    function WebPage(url, baseUrl, pageCategory, fetchCount, contentTitle) {
        if (url === void 0) { url = ""; }
        if (baseUrl === void 0) { baseUrl = ""; }
        if (pageCategory === void 0) { pageCategory = ""; }
        if (fetchCount === void 0) { fetchCount = 0; }
        if (contentTitle === void 0) { contentTitle = ""; }
        this.id = "";
        this.key = "";
        this.url = "";
        this.baseUrl = "";
        this.batchId = "";
        this.status = 0;
        this.createTime = "";
        this.distance = "";
        this.fetchCount = 0;
        this.fetchPriority = 1000;
        this.fetchTime = "";
        this.prevFetchTime = "";
        this.fetchInterval = "";
        this.retriesSinceFetch = "";
        this.modifiedTime = "";
        this.prevModifiedTime = "";
        this.contentModifiedTime = "";
        this.prevContentModifiedTime = "";
        this.contentPublishTime = "";
        this.prevContentPublishTime = "";
        this.refContentPublishTime = "";
        this.prevRefContentPublishTime = "";
        this.protocolStatus = "";
        this.content = "";
        this.contentType = "";
        this.pageCategory = "";
        this.prevSignature = "";
        this.signature = "";
        this.pageTitle = "";
        this.pageText = "";
        this.contentTitle = "";
        this.contentText = "";
        this.contentTextLength = "";
        this.referrer = "";
        this.pageCounters = "";
        this.parseStatus = "";
        this.contentScore = "";
        this.score = "";
        this.reprUrl = "";
        this.headers = "";
        this.oldOutlinks = "";
        this.outlinks = "";
        this.inlinks = "";
        this.markers = "";
        this.metadata = "";
        this.pageEntity = "";
        this.id = url;
        this.url = url;
        this.baseUrl = baseUrl;
        this.batchId = '';
        this.status = -1;
        this.pageCategory = pageCategory;
        this.fetchCount = fetchCount;
        this.fetchPriority = 1000;
        this.contentTitle = contentTitle;
        this.pageTitle = contentTitle;
    }
    return WebPage;
}());
exports.WebPage = WebPage;
//# sourceMappingURL=web-page.js.map