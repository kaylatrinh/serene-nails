import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-pink-100 py-4">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-pink-600">
          Glamour Nails
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="#services" className="text-pink-600 hover:text-pink-800">
              Services
            </Link>
          </li>
          <li>
            <Link href="#gallery" className="text-pink-600 hover:text-pink-800">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-pink-600 hover:text-pink-800">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

