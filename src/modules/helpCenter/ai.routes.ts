import express, { Router, Request, Response, NextFunction } from "express";
import { openRouterClient } from "../../config/deebseekClient";
import { HTTP_STATUS } from "../../config/constants";
import { AuthRequest } from "../../middlewares/auth.middleware";
import { authenticate } from "../../middlewares/auth.middleware";

const aiRoutes = Router();

// Apply authentication middleware to all AI routes
aiRoutes.use(authenticate);

aiRoutes.post("/assistant", async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        error: "User not authenticated",
      });
    }

    const { message } = req.body;

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: "Message is required and must be a non-empty string",
      });
    }

    // Check if API key is configured
    if (!process.env.OPENROUTER_KEY) {
      console.error("OPENROUTER_KEY is not set in environment variables");
      return res.status(500).json({
        success: false,
        error: "AI service is not configured. Please contact support.",
      });
    }

    console.log("Calling OpenRouter API with:", {
      baseURL: "https://openrouter.ai/api/v1",
      hasApiKey: !!process.env.OPENROUTER_KEY,
      apiKeyLength: process.env.OPENROUTER_KEY?.length || 0,
      messageLength: message.length,
    });

    const response = await openRouterClient.chat.completions.create({
      model: "deepseek/deepseek-chat", // OpenRouter model format: provider/model-name
      messages: [
        { role: "system", content: "You are Sanad helpful AI assistant." },
        { role: "user", content: message }],
    });

    console.log("OpenRouter API response received:", {
      hasResponse: !!response,
      hasChoices: !!response?.choices,
      choicesLength: response?.choices?.length,
    });

    // Validate response structure
    if (!response || !response.choices || response.choices.length === 0) {
      console.error("Invalid AI response structure:", response);
      return res.status(500).json({
        success: false,
        error: "Invalid response from AI service. Please try again.",
      });
    }

    // Extract the message content from the AI response
    const aiMessage = response.choices[0]?.message?.content || "I'm sorry, I couldn't process your request.";

    res.status(HTTP_STATUS.OK).json({
      success: true,
      data: {
        message: aiMessage,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error: any) {
    // Log detailed error information
    console.error("=== AI Assistant Error Details ===");
    console.error("Error Type:", error?.constructor?.name);
    console.error("Error Message:", error?.message);
    console.error("Error Status:", error?.status);
    console.error("Error StatusCode:", error?.statusCode);
    console.error("Error Code:", error?.code);
    console.error("Error Type:", error?.type);
    console.error("Error Response:", JSON.stringify(error?.response?.data, null, 2));
    console.error("Full Error Object:", JSON.stringify(error, Object.getOwnPropertyNames(error), 2));
    console.error("Stack:", error?.stack);
    console.error("=== End Error Details ===");

    // Handle OpenAI SDK errors
    if (error?.status === 401 || error?.statusCode === 401 || error?.status === 403 || error?.statusCode === 403) {
      return res.status(500).json({
        success: false,
        error: "AI service authentication failed. Please contact support.",
      });
    }

    if (error?.status === 429 || error?.statusCode === 429) {
      return res.status(500).json({
        success: false,
        error: "AI service is currently busy. Please try again later.",
      });
    }

    // Handle network/connection errors
    if (error?.code === "ECONNREFUSED" || error?.code === "ENOTFOUND" || error?.code === "ETIMEDOUT") {
      return res.status(500).json({
        success: false,
        error: "Unable to connect to AI service. Please try again later.",
      });
    }

    // Return a user-friendly error message with more details for debugging
    return res.status(500).json({
      success: false,
      error: error?.message || "An error occurred while processing your request. Please try again.",
    });
  }
});

export default aiRoutes;