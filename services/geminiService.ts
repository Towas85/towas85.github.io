
import { GoogleGenAI } from "@google/genai";
import { PORTFOLIO_DATA } from "../constants";

const getAI = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) throw new Error("API Key is missing");
  return new GoogleGenAI({ apiKey });
};

export const chatWithGemini = async (message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  const ai = getAI();
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: `
        Si virtuálny asistent pre webovú stránku používateľa menom ${PORTFOLIO_DATA.name}. 
        Tvojou úlohou je odpovedať na otázky návštevníkov o jeho skúsenostiach, projektoch a zručnostiach.
        
        Tu sú informácie o ňom:
        - Meno: ${PORTFOLIO_DATA.name}
        - Titul: ${PORTFOLIO_DATA.title}
        - Bio: ${PORTFOLIO_DATA.bio}
        - Zručnosti: ${PORTFOLIO_DATA.skills.map(s => `${s.name} (${s.level}%)`).join(", ")}
        - Projekty: ${PORTFOLIO_DATA.projects.map(p => p.title).join(", ")}
        - Skúsenosti: ${PORTFOLIO_DATA.experience.map(e => `${e.role} v ${e.company}`).join(", ")}

        Odpovedaj stručne, priateľsky a profesionálne v slovenskom jazyku. 
        Ak sa ťa opýtajú na niečo, čo nevieš o Jurajovi, slušne ich nasmeruj na kontaktný formulár.
      `,
    },
  });

  const response = await chat.sendMessage({ message });
  return response.text;
};
