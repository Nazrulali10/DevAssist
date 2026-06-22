import { CardProps } from "@/types/types";
import { BotMessageSquare, FileUser, Mailbox } from "lucide-react";

export const CardData: CardProps[] = [
  {
    title: "Resume Analyzer",
    icon: <FileUser />,
    description:
      "Evaluate your resume with AI - ATS scoring, strengths, weaknesses, and improvement suggestions.",
    link: "/ResumePage",
  },
  {
    title: "Developer Assistant",
    icon: <BotMessageSquare />,
    description:
      "Get instant answers to coding questions, interview preparation, debugging challenges.",
    link: "/AssistantPage",
  },
  {
    title: "Tech News",
    icon: <Mailbox />,
    description:
      "Stay informed with the latest technology news, industry trends, product launches, trending softwares.",
    link: "/NewsPage",
  },
];
