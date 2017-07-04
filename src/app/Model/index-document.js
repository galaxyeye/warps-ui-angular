"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by vincent on 17-6-15.
 */
var IndexDocument = (function () {
    function IndexDocument() {
        this.id = "";
        this.url = "";
        this.content_type = "";
        this.mime_type = "";
        this.seed_url = "";
        this.fetch_time_history = 0;
        this.domain = "";
        this.host = "";
        this.last_index_time = 0;
        this.last_crawl_time = 1000;
        this.index_time_history = "";
        this.first_crawl_time = "";
        this.first_index_time = "";
    }
    return IndexDocument;
}());
exports.IndexDocument = IndexDocument;
//# sourceMappingURL=index-document.js.map