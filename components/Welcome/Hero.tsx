import "./index.css"

export default function Hero() {
  return (
    <section className="relative h-[500px]">git a
      <div className="absolute inset-0 bg-green-900 bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
              <h1 className="text-3xl md:text-5xl sm:text-5xl text-black border-black mb-4 alex-brush">Serene Nails</h1>
              <h6 className="text-right text-black sm:text-2xl">At Willow Glen</h6>
              <a
                  href="#contact"
                  className="bg-green-950 bg-opacity-25 text-black py-2 px-6 rounded-full text-2xl hover:bg-white transition duration-300"
              >
                  Book Now
              </a>
          </div>
      </div>
    </section>
  )
}

