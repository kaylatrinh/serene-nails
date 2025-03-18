import { Resend } from 'resend';
import {NextApiRequest} from "next";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextApiRequest) {
    try {
        const { from, to, subject, message } = request.body
        const { data, error } = await resend.emails.send({
            from: from,
            to: to,
            subject: subject,
            message: message,
        })

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}