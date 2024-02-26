import * as z from 'zod';

export const ContactSchema = z.object({
    email: z.string().email(),
    message: z.string().min(1, {
        message: "Message is required",
    }),
});