/**
 * Created by vincent on 17-6-15.
 */
export class SolrDocument {
  key: string;
  baseUrl: string;
  batchId: string;
  status: number;
  pageCategory: string;
  fetchCount: number;
  fetchPriority: number;
  pageTitle: string;
  contentTitle: string;

  constructor(key: string, baseUrl: string) {
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
}
