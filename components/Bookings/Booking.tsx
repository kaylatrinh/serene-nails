// import EmailForm from "@/components/Email/EmailForm";
import CalendlyWidget from "@/components/Calendly/Calendly";

export default function Booking() {

  return (
      <div style={{overflow: "hidden"}}>
          <h2 className="text-3xl font-bold text-center mb-8 text-green-950 text-opacity-75">Book With Us</h2>
          {/*<EmailForm></EmailForm>*/}
          <CalendlyWidget />
      </div>)
}

