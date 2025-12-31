import { GoogleGenAI, Type } from "@google/genai";

// Always initialize with process.env.API_KEY directly as per SDK requirements
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateSEOSuggestions = async (keyword: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analyser nøkkelordet "${keyword}" og gi profesjonelle SEO-forslag på norsk for en nettside.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            titleTag: { type: Type.STRING, description: "En optimalisert tittel-tag." },
            metaDescription: { type: Type.STRING, description: "En engasjerende meta-beskrivelse." },
            contentIdeas: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "3-5 innholdsideer basert på nøkkelordet."
            }
          },
          required: ["titleTag", "metaDescription", "contentIdeas"]
        }
      }
    });

    // Access the text property directly (not as a method) and trim the result
    const jsonStr = response.text?.trim() || "{}";
    return JSON.parse(jsonStr);
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};