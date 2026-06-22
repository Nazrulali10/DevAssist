"use client";
import BackButton from "@/components/BackButton";
import Loader from "@/components/Loader";
import Button from "@/components/ui/Button";
import { Message } from "@/types/types";
import { useState } from "react";

const AssistantPage = () => {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const bullets = ["Technology", "Problem Solving", "Coding"];
  const handleClick = async () => {
    if (!prompt) {
      return;
    }
    setMessages((prev) => [...prev, { role: "user", content: prompt }]);
    setLoading(true);
    const res = await fetch("/api/assistant", {
      method: "POST",
      body: JSON.stringify({ prompt }),
    });
    setPrompt("");
    if (!res.ok) {
      alert("Limit Exceeded");
      setLoading(false);
      return;
    }
    let data = await res.json();

    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: data.answer },
    ]);
    setLoading(false);
  };

  return (
    <div className="flex h-[calc(100vh-5rem)] w-full justify-center ">
      <BackButton />
      <div className="flex flex-col shadow-xl h-full w-full md:w-[50%]  py-8 relative">
        {loading && <Loader />}
        <div className="flex flex-col  items-center justify-center gap-3">
          <h1 className="text-3xl font-bold">Ask Questions</h1>
          <div className="flex w-full gap-6 md:gap-6  justify-center items-center md:text-sm text-xs">
            Related to :
            <div className="flex gap-6 md:gap-10">
              {bullets.map((bullet, i) => (
                <li
                  className="marker:text-slate-400 md:text-sm text-xs list-disc list-inside"
                  key={i}
                >
                  {bullet}
                </li>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 overflow-y-auto px-2 md:px-24  h-118 mt-10 md:mt-6">
          {messages.map((mess, i) => (
            <div
              key={i}
              className={`${mess.role === "user" ? "  justify-end " : "bg-white justify-start"} flex `}
            >
              <div
                className={`flex justify-center px-3 py-2 text-sm rounded-3xl whitespace-pre-wrap bg-gray-300 max-w-[80%] min-w-16`}
              >
                {mess.content}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 z-10  w-full h-40 py-5">
          <input
            type="text"
            value={prompt}
            autoFocus
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleClick();
              }
            }}
            className="w-68 md:w-lg py-2 px-6 h-11  border border-slate-300 rounded-2xl outline-none focus:border-gray-500 "
          />
          <Button
            className="w-18 h-11 "
            onClick={handleClick}
            disabled={loading}
          >
            Ask AI
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AssistantPage;
