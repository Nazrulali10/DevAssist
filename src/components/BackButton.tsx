"use client";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <div className="p-6 hidden md:flex">
      <button
        onClick={() => router.push("/")}
        className="flex justify-center items-center rounded-full text-white bg-black h-9 w-9  hover:opacity-50 duration-300"
      >
        <MoveLeft size={16} />
      </button>
    </div>
  );
};

export default BackButton;
