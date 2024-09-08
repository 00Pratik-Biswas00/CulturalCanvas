/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

// Define the prompt and session for the Heritage and Culture Expert
export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "You are an expert in heritage and culture. Act as an expert in {language} and answer all the questions in the same language. Keep information precise, and if someone asks something irrelevant, respond that it's irrelevant.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: `
{
  "response": "Sure, I can help with heritage and culture information in the specified language. Please ask your question.",
  "irrelevantResponse": "The question asked is irrelevant to heritage and culture. Please ask a relevant question."
}`,
        },
      ],
    },
  ],
});

// Example usage of the chatSession
export const askExpert = async (question, language) => {
  const response = await chatSession.continue({
    history: [
      {
        role: "user",
        parts: [
          { text: `Please provide information about the cultural heritage of Egypt in ${language}.` },
        ],
      },
    ],
  });

  return response.data; // This will return the expert's response in the specified language
};
