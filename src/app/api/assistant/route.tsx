import { ai } from "@/lib/gemini";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();
    const promptText = `
You are a helpful AI assistant for software developers.

Rules:
- Give concise and practical answers.
- Use simple language.
- Keep answers under 150 words unless the user asks for more detail.
- For coding questions, provide a short explanation followed by code if needed.
- Format responses neatly.

User Question:
${prompt}
`;
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: promptText,
    });

    return NextResponse.json({
      answer: response.text,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Server error " }, { status: 500 });
  }
}
