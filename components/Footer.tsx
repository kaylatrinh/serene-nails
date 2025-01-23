export default function Footer() {
  return (
    <footer id="contact" className="bg-pink-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>123 Beauty Street</p>
            <p>Nail City, NC 12345</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@glamournails.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Hours</h3>
            <p>Monday - Friday: 9am - 7pm</p>
            <p>Saturday: 10am - 6pm</p>
            <p>Sunday: Closed</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-pink-200">
                Facebook
              </a>
              <a href="#" className="hover:text-pink-200">
                Instagram
              </a>
              <a href="#" className="hover:text-pink-200">
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Glamour Nails. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

