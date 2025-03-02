import Image from "next/image"
import "./index.css"
import SereneLogo from "@/public/logo/serene-logo.jpg";

export default function Hero() {
  return (
    <section className="relative h-[500px]">
      {/*<Image*/}
      {/*  src="/white-lotus/2.png"*/}
      {/*  alt="Nail salon hero image"*/}
      {/*  layout="fill"*/}
      {/*  objectFit="cover"*/}
      {/*  priority*/}
      {/*/>*/}
      {/*<div className="absolute inset-5 flex items-start">*/}
      {/*    <Image*/}
      {/*        src={SereneLogo}*/}
      {/*        alt="Serene Logo"*/}
      {/*        height={100}*/}
      {/*        width={130}*/}
      {/*    />*/}
      {/*</div>*/}
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

