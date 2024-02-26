"use server"

import * as z from "zod";
import { ContactSchema } from "@/schemas";
import { sendEmail } from "@/lib/mail";

export const sendMail = async (values: z.infer<typeof ContactSchema>) => {
    const validatedFields = ContactSchema.safeParse(values);

    if(!validatedFields.success){
        return { error: "Invalid fields!"};
    }

    const { email, message } = validatedFields.data;

    await sendEmail(email, message);

    return { success: "Sent successfuly!"};
}