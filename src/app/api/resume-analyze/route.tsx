import { ResumeAI } from "@/lib/gemini";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { resume } = await request.json();
    const promptText = `
You are an ATS resume reviewer.

Analyze the resume below.

Return ONLY:

ATS Score: X/100

Strengths:
- point 1
- point 2

Weaknesses:
- point 1
- point 2

Missing Skills:
- point 1
- point 2

Suggestions:
- point 1
- point 2

Do NOT rewrite the resume.
Do NOT improve the resume.
Do NOT provide a revised resume.
Do NOT explain your reasoning.

Resume:

${resume}
`;
    const result = await ResumeAI.models.generateContent({
      model: "gemini-2.5-flash",
      contents: promptText,
    });
    return NextResponse.json({ resume: result.text });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Server error " }, { status: 500 });
  }
}
