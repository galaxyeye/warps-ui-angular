/**
 * Created by vincent on 17-6-15.
 */
export class IndexDocument {
  id: string = "";
  url: string = "";
  content_type: string = "";
  mime_type: string = "";
  seed_url: string = "";
  fetch_time_history: number = 0;
  domain: string = "";
  host: string = "";
  last_index_time: number = 0;
  last_crawl_time: number = 1000;
  index_time_history: string = "";
  first_crawl_time: string = "";
  first_index_time: string = "";
}
