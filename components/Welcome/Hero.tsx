import Image from "next/image"
import "./index.css"
import SereneLogo from "@/public/logo/serene-logo.jpg";

export default function Hero() {
  return (
    <section className="relative h-[500px]">
      <Image
        src="/white-lotus/2.png"
        alt="Nail salon hero image"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-5 flex items-start">
          <Image
              src={SereneLogo}
              alt="Serene Logo"
              height={100}
              width={130}
          />
      </div>
      <div className="absolute inset-0 bg-blue bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
              <h1 className="text-3xl md:text-5xl sm:text-5xl text-white border-black mb-4 alex-brush">Serene Nails</h1>
              <h6 className="text-right text-white sm:text-2xl">At Willow Glen</h6>
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

