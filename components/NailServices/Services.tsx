import "./index.css"
export default function Services() {
  // const prices = [
  //   { name: "Manicure", price: "$25" },
  //   { name: "Pedicure", price: "$35" },
  //   { name: "Gel Polish", price: "$30" },
  //   { name: "Acrylic Full Set", price: "$50" },
  //   { name: "Nail Art", price: "$10+" },
  //   { name: "Paraffin Treatment", price: "$15" },
  // ]

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-950 text-opacity-75">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div><img src="/prices/pricing2.PNG" alt="My Image" /></div>
        <div><img src="/prices/pricing3.PNG" alt="My Image" /></div>
        <div><img src="/prices/pricing1.PNG" alt="My Image" /></div>
        </div>
      </div>
    </section>
  )
}

