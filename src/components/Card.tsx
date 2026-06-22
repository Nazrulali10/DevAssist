import { CardProps } from "@/types/types";

const Card = ({ card }: { card: CardProps }) => {
  return (
    <div className="flex flex-col w-80 md:w-84 h-xl rounded-lg shadow-md p-6 gap-2 hover:scale-95 duration-300">
      <h1 className="text-xl">{card.title}</h1>
      <div className="flex gap-3">
        <span className="animate-pulse duration-300">{card.icon}</span>
        <p className="text-sm text-gray-400">{card.description}</p>
      </div>
    </div>
  );
};

export default Card;
