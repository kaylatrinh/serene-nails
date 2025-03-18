import EmailForm from "@/components/Email/EmailForm";
export default function Booking() {

  return (
    <section id="booking" className="py-16">
      <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-green-950 text-opacity-75">Book With Us</h2>
          <form>
              <label htmlFor={"email"}>Your Email: </label>
              <div className="flex flex-wrap py-2">
                  <input className="flex-1 border-green-950 border-2 border-opacity-50 rounded"/>
              </div>
              <label htmlFor={"inquiry"}>Please provide date, time, and type of appointment you are looking for: </label>
              <div className="flex flex-wrap py-2">
                  <textarea className="flex-1 border-green-950 border-2 border-opacity-50 rounded"/>
              </div>
              <div className="py-3">
              <button type="submit" className="bg-green-950 bg-opacity-50 text-black text-opacity-75 rounded-full py-2 px-6 hover:bg-green-900">Submit Inquiry</button>
              </div>
          </form>
      </div>
    </section>
  )
}

