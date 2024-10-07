import {z} from "zod";

export const zStringChooser = (vals: string[]) => z.string().refine(s=>vals.includes(s), {
    message: `String must be from the following: ${vals}`
})

export const zDialogueSchema = (characters: string[], scenes: string[]) => z.object({
    mood: zStringChooser(["happiness", "sadness", "fear", "disgust", "anger", "surprise"]),
    dialogues: z.array(z.object({
        content: z.string(),
        scene: zStringChooser(scenes)
    })),
})