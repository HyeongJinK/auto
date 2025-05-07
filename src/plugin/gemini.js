import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generateText(prompt, systemInstruction = undefined) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
      config: systemInstruction ? { systemInstruction } : undefined,
    });
    console.log("텍스트 생성 성공:", response.text);
    return response.text;
  } catch (error) {
    console.error("텍스트 생성 실패:", error);
    return null;
  }
}

export { generateText };