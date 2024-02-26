import { Resend } from "resend";

const resend = new Resend("re_71brUGgU_6GH6vvNVu5ott8sMAPPVg3BK");


export const sendEmail = async (
    email:string,
    message:string
) => {
    // await resend.emails.send({
    //     from: email,
    //     to: "brene.klaricic@gmail.com",
    //     subject:"",
    //     html:`<p>"${message}"</p>`,
    // });    
    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "brene.klaricic@gmail.com",
        subject:`Contact email from ${email}`,
        html:`<p>${message}</p>`,
    });
};