import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const source_domain = process.env.SOURCE_DOMAIN ?? '';
const target_email = process.env.TARGET_EMAIL ?? '';

export async function POST(request: Request) {
    try {
        const formData= await request.formData();
        console.log(formData);
        const email = formData.get("email") as string ?? '';
        const name = formData.get("name") as string ?? '';
        const message = formData.get("message") as string ?? '';
        const {data, error} = await resend.emails.send({
            from: source_domain,
            to: target_email,
            subject: "serenenailswg: Message from " + name + " at " + email,
            text: message,
        })

        if (error) {
            return Response.json({error}, {status: 500});
        }
        return Response.json(data);

    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
