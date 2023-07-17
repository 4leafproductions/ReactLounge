import Parser from 'rss-parser';
export async function getData(url: string) {
  type CustomFeed = {title: string, description: string};
  type CustomItem = { pubDate: string};
  const CORS_PROXY = "https://andrewscorsproxy-2663f3ef8f7f.herokuapp.com/"
    const parser: Parser<CustomFeed, CustomItem> = new Parser({
      customFields: {
        feed: ['title', 'description'],
        item: [ 'pubDate']
      }
    });
    const feed = await parser.parseURL(CORS_PROXY+url);
    return feed;
    }