import { GoogleGenerativeAI } from "@google/generative-ai";

const PROMPT = `You are an advanced nutritionist AI designed to calculate the exact daily calorie intake based on user data. Perform all necessary calculations internally but return only a single number as the final result, representing the daily calorie intake (e.g., '2300'). Do not include any words, explanations, or formatting—just the number`;

const genAI = new GoogleGenerativeAI("AIzaSyBSitkeCjGIqd4bOZLMiFhYgFfvuBDnl1E");

export async function getResponseFromAI(userData) {
  try {
    const AGE = userData.age ?? 18;
    const GOAL = userData.goal ?? "weight maintenance";
    const HEIGHT =
      userData.height ??
      (userData.heightMeasurement === "cm" ? "170 cm" : "5.5 ft");
    const WEIGHT =
      userData.age ?? (userData.heightMeasurement == "kg" ? "60 kg" : "130 lb");
    const WEIGHTGOAL = userData.weightGoal ?? "60 kg";
    const PROMPT = `You are an advanced nutritionist AI designed to calculate the exact daily calorie intake based on user data. Perform all necessary calculations internally but return only a single number as the final result, representing the daily calorie intake (e.g., '2300'). Do not include any words, explanations, or formatting—just the number, Calculate my daily calorie intake based on the following details: Age: ${AGE}, Goal: ${GOAL}, Height: ${HEIGHT}, Weight: ${WEIGHT}, Target Weight: ${WEIGHTGOAL}`;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(PROMPT);
    return result.response.text();
  } catch (e) {
    console.log("AI response error: " + e.message);
  }
}

export async function generateMealPlan() {
    try {
        const PROMPT = `You are an expert nutritionist AI. Generate a one-week meal plan in valid JSON format ONLY without any extra text, disclaimers, or explanations.

Each day's meals should include:
Breakfast, lunch, and dinner
Meal name
Total calories
Total weight (grams)
Protein (g), fat (g), and carbs (g)
Ensure all meals use locally available foods from [country/cuisine].

Return the meal plan in JSON format like this:
{
  "weekPlan": [
    {
      "day": "Monday",
      "meals": [
        {
          "mealName": "Oatmeal with Berries",
          "calories": 400,
          "weight": 300,
          "protein": 10,
          "fat": 15,
          "carbs": 50
        },
        {
          "mealName": "Chicken Salad Sandwich",
          "calories": 550,
          "weight": 400,
          "protein": 30,
          "fat": 25,
          "carbs": 40
        },
        {
          "mealName": "Grilled Chicken with Vegetables",
          "calories": 600,
          "weight": 350,
          "protein": 40,
          "fat": 20,
          "carbs": 35
        }
      ]
    },
    {
      "day": "Tuesday",
      "meals": [
        {
          "mealName": "Pancakes with Maple Syrup",
          "calories": 450,
          "weight": 350,
          "protein": 8,
          "fat": 12,
          "carbs": 70
        },
        {
          "mealName": "Quinoa Salad",
          "calories": 500,
          "weight": 300,
          "protein": 15,
          "fat": 18,
          "carbs": 55
        },
        {
          "mealName": "Baked Salmon with Rice",
          "calories": 650,
          "weight": 400,
          "protein": 45,
          "fat": 25,
          "carbs": 40
        }
      ]
    },
    ...
  ]
}

⚠️ IMPORTANT:

Do NOT add explanations, disclaimers, or extra text.
ONLY return valid JSON output.
ETHIOPIAN FOODS ONLY`;

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
        const result = await model.generateContent(PROMPT);
        return result.response.text();
      } catch (e) {
        console.log("AI response error: " + e.message);
      }
}