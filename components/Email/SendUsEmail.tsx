import EmailForm from "@/components/Email/EmailForm";

export default function SendUsEmail() {
    return (
        <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-pink-600">Send Us An Email</h2>
            <p className="text-center mb-8 text-gray-700">
            Have questions or want to book an appointment? Fill out the form below and we'll get back to you!
            </p>
            <EmailForm />
        </div>
        </section>
    )
}