/**
 * Created by vincent on 17-6-15.
 */
export class WebPage {
  id: string= "";
  key: string = "";
  url: string = "";
  baseUrl: string = "";
  batchId: string = "";
  status: number = 0;
  createTime: string = "";
  distance: string = "";
  fetchCount: number = 0;
  fetchPriority: number = 1000;
  fetchTime: string = "";
  prevFetchTime: string = "";
  fetchInterval: string = "";
  retriesSinceFetch: string = "";
  modifiedTime: string = "";
  prevModifiedTime: string = "";
  contentModifiedTime: string = "";
  prevContentModifiedTime: string = "";
  contentPublishTime: string = "";
  prevContentPublishTime: string = "";
  refContentPublishTime: string = "";
  prevRefContentPublishTime: string = "";
  protocolStatus: string = "";
  content: string = "";
  contentType: string = "";
  pageCategory: string = "";
  prevSignature: string = "";
  signature: string = "";
  pageTitle: string = "";
  pageText: string = "";
  contentTitle: string = "";
  contentText: string = "";
  contentTextLength: string = "";
  referrer: string = "";
  pageCounters: string = "";
  parseStatus: string = "";
  contentScore: string = "";
  score: string = "";
  reprUrl: string = "";
  headers: string = "";
  oldOutlinks: string = "";
  outlinks: string = "";
  inlinks: string = "";
  markers: string = "";
  metadata: string = "";
  pageEntity: string = "";

  constructor(url:string = "", baseUrl:string = "", pageCategory:string = "", fetchCount:number = 0, contentTitle:string = "") {
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
}
