import Header from "../components/Header/Header"
import Hero from "../components/Welcome/Hero"
import Services from "../components/NailServices/Services"
// import Gallery from "../components/Gallery"
import Footer from "../components/Footer"
import Booking from "../components/Bookings/Booking"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Booking />
        {/* <Gallery /> */}
      </main>
      <Footer />
    </div>
  )
}
