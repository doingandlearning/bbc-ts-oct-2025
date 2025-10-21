import fs from "node:fs";

type User = {
  name: string;
  age: string;
  region: string;
};

type Regions = Record<string, string[]>;

type NewsArticle = {
  id: string;
  headline: string;
  content: string;
};

fs.readFile("user.json", "utf-8", (err: Error | null, data: string) => {
  if (err) {
    console.log(err);
    process.exit(1);
  } // 1 -> 2 -> 3
  const user: User = JSON.parse(data);
  fs.readFile("regions.json", "utf-8", (err: Error | null, data: string) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    const regions: Regions = JSON.parse(data);
    fs.readFile("news.json", "utf-8", (err: Error | null, data: string) => {
      if (err) {
        console.log(err);
        process.exit(1);
      }
      const allNews: Array<NewsArticle> = JSON.parse(data);
      const userRegionIDs = regions[user.region] ?? [];
      const userNews = allNews.filter((article) =>
        userRegionIDs.includes(article.id)
      );
      userNews.forEach((news) => {
        console.log(news.headline);
        console.log(news.content);
        console.log("--------");
      });
    });
  });
});
