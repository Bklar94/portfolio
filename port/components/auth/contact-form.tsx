"use client"
import * as z from "zod";
import { Input } from "../ui/input";
import { CardWrapper } from "./card-wrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { ContactSchema } from "@/schemas";
import { sendMail } from "@/actions/send";
import { useState, useTransition } from "react";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";


export const ContactForm = () => {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof ContactSchema>>({
        resolver: zodResolver(ContactSchema),
        defaultValues: {
            email: "",
            message: "",
        }
    });

    const onSubmit = (values: z.infer<typeof ContactSchema>) => {
        setError("");
        setSuccess("");
        startTransition(() => {
            sendMail(values)
            .then((data) => {
                setError(data.error);
                setSuccess(data.success);
            })
        });
    }

    return (
        <CardWrapper
        headerLabel="Feel free to contact me"
        h1Label="Contact"
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6">
                    <div className="space-y-4">
                        <FormField 
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Email
                                </FormLabel>
                                <FormControl>
                                    <Input
                                    disabled={isPending}
                                    {...field}
                                    placeholder="john.doe@example.com"
                                    type="email"/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField 
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Message
                                </FormLabel>
                                <FormControl>
                                    <Textarea 
                                    disabled={isPending}
                                    {...field}
                                    placeholder="Type your message here."/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />
                    </div>
                    <FormError message={error}/>
                    <FormSuccess message={success}/>
                    <Button
                    disabled={isPending}
                    type="submit"
                    variant={"default"}
                    className="w-full text-md"
                    >
                    Send 🚀
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}