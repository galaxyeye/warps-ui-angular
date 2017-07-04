"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by vincent on 17-6-15.
 */
var SolrDocument = (function () {
    function SolrDocument(key, baseUrl) {
        this.key = key;
        this.baseUrl = baseUrl;
        this.batchId = '';
        this.status = -1;
        this.pageCategory = 'UNKNOWN';
        this.fetchCount = 0;
        this.fetchPriority = 1000;
        this.pageTitle = '';
        this.contentTitle = '';
    }
    return SolrDocument;
}());
exports.SolrDocument = SolrDocument;
//# sourceMappingURL=solr-document.js.map