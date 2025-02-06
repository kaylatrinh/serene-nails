import Header from "../components/Header/Header"
import Hero from "../components/Welcome/Hero"
import Services from "../components/NailServices/Services"
// import Gallery from "../components/Gallery"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        {/* <Gallery /> */}
      </main>
      <Footer />
    </div>
  )
}
