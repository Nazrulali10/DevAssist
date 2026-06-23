import { GoogleGenAI} from '@google/genai'

export const ResumeAI = new GoogleGenAI({
    apiKey:process.env.GEMINI_API_KEY1
})
export const AssistantAI = new GoogleGenAI({
    apiKey:process.env.GEMINI_API_KEY2
})