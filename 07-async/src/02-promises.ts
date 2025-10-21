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

let user: User;
let regions: Regions;
let allNews: Array<NewsArticle>;

// fs.readFile("user.json", "utf-8")
//   .then((data) => {
//     user = JSON.parse(data);
//     return fs.readFile("reions.json", "utf-8");
//   })
//   .then(
//     (data) => {
//       regions = JSON.parse(data);
//       return fs.readFile("news.json", "utf-8");
//     },
//     (err) => {
//       console.log("error in local catch");
//       process.exit(1);
//     }
//   )
//   .then((data) => {
//     allNews = JSON.parse(data);
//     const userRegionIDs = regions[user.region] ?? [];
//     const userNews = allNews.filter((article) =>
//       userRegionIDs.includes(article.id)
//     );
//     userNews.forEach((news) => {
//       console.log(news.headline);
//       console.log(news.content);
//       console.log("--------");
//     });
//   })
//   .catch((err) => {
//     console.log("In the catch!");
//     console.log(err);
//     process.exit(1);
//   });

// Promise.all([
//   fs.readFile("user.json", "utf-8"),
//   fs.readFile("regions.json", "utf-8"),
//   fs.readFile("news.json", "utf-8"),
// ])
//   .then((data) => {
//     user = JSON.parse(data[0]);
//     regions = JSON.parse(data[1]);
//     allNews = JSON.parse(data[2]);
//     const userRegionIDs = regions[user.region] ?? [];
//     const userNews = allNews.filter((article) =>
//       userRegionIDs.includes(article.id)
//     );
//     userNews.forEach((news) => {
//       console.log(news.headline);
//       console.log(news.content);
//       console.log("--------");
//     });
//   })
//   .catch((err) => console.log(err));

Promise.allSettled([
  fs.readFile("user.json", "utf-8"),
  fs.readFile("regions.json", "utf-8"),
  fs.readFile("news.json", "utf-8"),
]).then((data) => {
  user =
    data[0].status === "fulfilled"
      ? JSON.parse(data[0].value)
      : { region: "SE" };
  regions =
    data[1].status === "fulfilled"
      ? JSON.parse(data[1].value)
      : { SE: ["news1"] };
  allNews = data[2].status === "fulfilled" ? JSON.parse(data[2].value) : [];

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
