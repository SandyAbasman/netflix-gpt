import OpenAI from "openai";

const openaiKey = import.meta.env.VITE_OPENAI_KEY;

const openai = new OpenAI({
  apiKey: openaiKey,
  dangerouslyAllowBrowser: true,
});

export default openai;
