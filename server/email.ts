import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailRequest {
    email: string;
    inquiry: string;
}

app.post("/send-email", async (req: Request, res: Response) => {
    const { email, inquiry }: EmailRequest = req.body;

    if (!email || !inquiry) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const result = await resend.emails.send({
            from: "kayla.trinh.nguyen@gmail.com",
            to: "kaylalatrinh@gmail.com",
            subject: "New Booking Inquiry",
            html: `<p><strong>From:</strong> ${email}</p><p>${inquiry}</p>`,
        });

        if (result.data) {
            res.json({ message: "Email sent successfully!", id: result.data.id });
        } else {
            res.status(500).json({ error: "Failed to send email", details: result.error });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to send email" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
