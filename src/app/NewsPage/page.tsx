import BackButton from "@/components/BackButton";
import Loader from "@/components/Loader";
import NewsCard from "@/components/NewsCard";
import { NewsArticle } from "@/types/types";

const NewsPage = async () => {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=technology&pageSize=12&apiKey=${process.env.NEWS_API_KEY}`,
    {
      next: {
        revalidate: 3600,
      },
    },
  );
  console.log("fetching news");
  const data = await res.json();
  return (
    <div className=" flex justify-center h-full w-full mb-20">
      <div className="flex flex-col items-center w-full md:w-[75%]">
        <div className="flex mt-10 items-center justify-center">
          <BackButton />
          <h1 className="text-3xl font-bold ">Tech News</h1>
        </div>
        {!res ? (
          <Loader />
        ) : (
          <div className="flex mt-5">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
              {data.articles.map((article: NewsArticle) => (
                <NewsCard article={article} key={article.url} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsPage;
