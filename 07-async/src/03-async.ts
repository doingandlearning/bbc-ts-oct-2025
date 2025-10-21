import fs from "node:fs/promises";

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

async function getData() {
  const userPromise = fs.readFile("user.json", "utf-8");
  const regionsPromise = fs.readFile("regions.json", "utf-8");
  const allNewsPromise = fs.readFile("news.json", "utf-8");

  const [userString, regionsString, allNewsString] = await Promise.all([
    userPromise,
    regionsPromise,
    allNewsPromise,
  ]);

  const user: User = JSON.parse(userString); // response.json()
  const regions: Regions = JSON.parse(regionsString);
  const allNews: Array<NewsArticle> = JSON.parse(allNewsString);

  const userRegionIDs = regions[user.region] ?? [];
  const userNews = allNews.filter((article) =>
    userRegionIDs.includes(article.id)
  );
  userNews.forEach((news) => {
    console.log(news.headline);
    console.log(news.content);
    console.log("--------");
  });
}

getData();
