import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyBzauwNX_2b6BHiEXhaQDdH9JIN1dapoaE");

async function main() {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent("Write a code for add two variables in js");
    const response = await result.response;

    console.log("Gemini response:", response.text());
  } catch (error) {
    console.error("Error:", error);
  }
}

main(); 
