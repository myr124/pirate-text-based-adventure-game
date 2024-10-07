import { groq } from '@/util/consts';
import { streamText, convertToCoreMessages } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: groq('llama3-8b-8192'),
    messages: convertToCoreMessages(messages),
    async onFinish({text, toolCalls, toolResults, usage, finishReason}) {
        console.log({
            text
        })
        // await saveChat({text, toolCalls, toolResults});
    },
  });

  return result.toDataStreamResponse();
}