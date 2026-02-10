import OpenAI from "openai";

// OpenRouter API client (OpenAI-compatible)
// BaseURL: https://openrouter.ai/api/v1
// API Key: Set OPENROUTER_KEY in environment variables
export const openRouterClient = new OpenAI({
  apiKey: process.env.OPENROUTER_KEY || "",
  baseURL: "https://openrouter.ai/api/v1",
});