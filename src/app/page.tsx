import { CardData } from "@/assets/data"
import Card from "@/components/Card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center ">
         <div className="grid grid-cols-1 md:grid-cols-3 mt-15 md:mt-40 gap-8 md:gap-5">
       {
            CardData.map((card,i)=>(
              <Link href={card.link} key={i}>
                <Card key={i} card={card} />
                </Link>
            ))
        }
        </div>
      </div>
     
    </div>
  );
}
