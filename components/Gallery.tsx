import Image from "next/image"

export default function Gallery() {
  const images = [
    { src: "/placeholder.svg?height=300&width=300", alt: "Nail design 1" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Nail design 2" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Nail design 3" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Nail design 4" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Nail design 5" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Nail design 6" },
  ]

  return (
    <section id="gallery" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-pink-600">Our Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative h-64">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

