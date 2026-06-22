import { NewsCardProps } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";

const NewsCard = ({ article }: NewsCardProps) => {
  return (
    <Link
      href={article.url}
      className="flex flex-col w-44 md:w-80 rounded-xl shadow-md overflow-hidden hover:scale-105 duration-300"
    >
      <Image
        src={article.urlToImage}
        alt={article.title}
        width={300}
        height={100}
        priority
        className="object-cover w-full"
      />

      <div className="flex flex-col p-2 md:p-6 ">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold leading-tight md:text-base text-sm">
            {article.title}
          </h1>
          <p className="md:text-sm text-xs text-gray-600 line-clamp-4 md:line-clamp-none">
            {article.description}
          </p>
        </div>

        <div className="flex justify-between items-center w-full pt-4">
          <Button
            disabled={false}
            className="px-2 text-base md:px-3 hover:bg-gray-400 duration-300"
          >
            Read More
          </Button>
          <div className="text-xs text-gray-400 ">
            {new Date(article.publishedAt).toLocaleDateString()}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
