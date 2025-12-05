import { GoogleGenAI, Type, SchemaType } from "@google/genai";
import { BookingDetails, GeneratedItinerary } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateCustomItinerary = async (details: BookingDetails): Promise<GeneratedItinerary> => {
  const model = "gemini-2.5-flash";
  
  const prompt = `
    Create a detailed travel itinerary for a trip to ${details.destination}.
    Travel Details:
    - Duration: ${details.days} days
    - Start Date: ${details.startDate}
    - Travelers: ${details.travelers} people
    - Trip Style: ${details.tripType}

    Requirements:
    1. Provide a day-by-day itinerary without specific costs/prices.
    2. Suggest 2-3 hotels suited for the trip style.
    3. List standard package inclusions (e.g., transfers, breakfast).
    4. Keep the tone exciting and professional for a travel agency named "Bhraman".
  `;

  const responseSchema = {
    type: Type.OBJECT,
    properties: {
      title: { type: Type.STRING, description: "A catchy title for the trip package" },
      overview: { type: Type.STRING, description: "A brief 2-sentence overview of the experience" },
      dailyPlan: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            day: { type: Type.INTEGER },
            title: { type: Type.STRING },
            activities: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING } 
            }
          }
        }
      },
      hotelSuggestions: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING },
            type: { type: Type.STRING, description: "e.g., 5-Star, Boutique, Resort" },
            description: { type: Type.STRING }
          }
        }
      },
      inclusions: {
        type: Type.ARRAY,
        items: { type: Type.STRING }
      }
    },
    required: ["title", "overview", "dailyPlan", "hotelSuggestions", "inclusions"]
  };

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.7,
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as GeneratedItinerary;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to generate itinerary. Please try again.");
  }
};
