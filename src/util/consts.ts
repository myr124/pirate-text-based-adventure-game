import { createOpenAI } from '@ai-sdk/openai';

export const allDefaultArchetypes = [] as const;

export const allDefaultScenes = [] as const;

export const allDefaultMoods = ["happiness", "sadness", "fear", "disgust", "anger", "surprise"] as const;

export const allStorySizes = ["small", "medium", "large"] as const;
export type StorySize = typeof allStorySizes[number];
export const groq = createOpenAI({
    baseURL: 'https://api.groq.com/openai/v1',
    apiKey: process.env.GROQ_API_KEY,
  });