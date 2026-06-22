"use client";
import BackButton from "@/components/BackButton";
import Loader from "@/components/Loader";
import Button from "@/components/ui/Button";
import { useState } from "react";

const ResumePage = () => {
  const [result, setResult] = useState("");
  const [resumeText, setResumeText] = useState("");
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    if (!resumeText) {
      return;
    }
    setLoading(true);
    const res = await fetch("/api/resume-analyze", {
      method: "POST",
      body: JSON.stringify({ resume: resumeText }),
    });
    setResumeText("");
    if (!res.ok) {
      alert("Limit Exceeded");
      setLoading(false);
      return;
    }
    const data = await res.json();
    setResult(data.resume);
    setLoading(false);
  };
  return (
    <div className="flex justify-center w-full min-h-[calc(100vh-5rem)]">
      <BackButton />
      <div className="w-full md:w-[50%] shadow-2xl relative">
        {loading && <Loader />}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center mt-18 gap-1">
            <h1 className="text-3xl font-bold">Resume Analyzer</h1>
            <p className="text-sm text-gray-500">
              {!result ? "Copy & Paste Your Resume" : "Check Out Your Score"}
            </p>
          </div>
          {result ? (
            <div className="flex flex-col items-center overflow-y-auto p-6 gap-10">
              <div className="w-full flex justify-center px-6 md:px-16">
                <p className="flex text-sm whitespace-pre-wrap text-slate-900">
                  {result}
                </p>
              </div>
              <Button
                onClick={() => {
                  setResult("");
                  setResumeText("");
                }}
                disabled={false}
                className="w-42 px-3"
              >
                Analayze New Resume
              </Button>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4 px-4 md:px-28">
              <textarea
                onChange={(e) => setResumeText(e.target.value)}
                value={resumeText}
                rows={10}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleClick();
                  }
                }}
                className="resize-none border border-gray-400 outline-none w-full p-6 rounded-lg focus:shadow-lg"
              />
              <Button onClick={handleClick} disabled={loading} className="w-22">
                Analyze
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
