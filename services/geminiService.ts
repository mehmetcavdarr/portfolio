import { GoogleGenAI, Chat } from "@google/genai";
import { CHATBOT_SYSTEM_PROMPT } from "../constants";

let chatSession: Chat | null = null;

const getChatSession = (): Chat => {
  if (chatSession) return chatSession;

  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is not defined in the environment.");
    throw new Error("API Key missing");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: CHATBOT_SYSTEM_PROMPT,
      temperature: 0.7,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
    // Use sendMessage for a simple await/response pattern for this simple UI
    const response = await chat.sendMessage({ message });
    return response.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    throw error;
  }
};