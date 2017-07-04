"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var web_page_1 = require("../../Model/web-page");
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 0, name: 'Zero' },
            { id: 11, name: 'Mr. Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ];
        // key:string, baseUrl:string, pageCategory:string, fetchCount:number, contentTitle:string
        var pages = [
            new web_page_1.WebPage('http://pulsar.warps.org/seeds/1', 'http://pulsar.warps.org/seeds/1', "INDEX", 1, "Helsebi aseidadke biqee"),
            new web_page_1.WebPage('u12', 'http://le.qiwur.com/prizes/2', "INDEX", 1, "Halsebi aseidadke biqee"),
            new web_page_1.WebPage('u13', 'http://le.qiwur.com/prizes/3', "DETAIL", 1, "Hbsebi aseidadke biqee"),
            new web_page_1.WebPage('u14', 'http://le.qiwur.com/prizes/4', "INDEX", 1, "Helsebi aseidadke biqee"),
            new web_page_1.WebPage('u15', 'http://le.qiwur.com/prizes/5', "INDEX", 1, "Hrlsebi aseidadke biqee"),
            new web_page_1.WebPage('u16', 'http://le.qiwur.com/prizes/6', "DETAIL", 1, "Htlsebi aseidadke biqee"),
            new web_page_1.WebPage('u17', 'http://le.qiwur.com/prizes/7', "INDEX", 1, "Hylsebi aseidadke biqee"),
            new web_page_1.WebPage('u18', 'http://le.qiwur.com/prizes/8', "UNKNOWN", 1, "Holsebi aseidadke biqee"),
            new web_page_1.WebPage('u19', 'http://le.qiwur.com/prizes/9', "UNKNOWN", 1, "Hilsebi aseidadke biqee"),
            new web_page_1.WebPage('u20', 'http://le.qiwur.com/prizes/10', "INDEX", 1, "H13lsebi aseidadke biqee")
        ];
        return {
            heroes: heroes,
        };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map