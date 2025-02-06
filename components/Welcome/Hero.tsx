import Image from "next/image"
import "./index.css"

export default function Hero() {
  return (
    <section className="relative h-[500px]">
      <Image
        src="/placeholder.svg?height=500&width=1920"
        alt="Nail salon hero image"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl text-white mb-4 alex-brush">Serene Nails</h1>
          <p className="text-xl text-white mb-8">Willow Glen</p>
          <a
            href="#contact"
            className="bg-pink-600 text-white py-2 px-6 rounded-full text-lg hover:bg-pink-700 transition duration-300"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  )
}

