export default function Footer() {
  return (
    <footer id="contact" className="bg-white py-8 text-green-950 text-opacity-75">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>1387 Lincoln Ave</p>
            <p>San Jose, CA 95125</p>
            <p>(669) 208-8836</p>
            <p>serenenails2025@gmail.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Hours</h3>
            <p>Monday: Closed</p>
            <p>Tuesday - Friday: 10am - 7pm</p>
            <p>Saturday: 10am - 6pm</p>
            <p>Sunday: 10am - 5pm</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* <a href="#" className="hover:text-pink-200">
                Facebook
              </a> */}
              <a href="https://www.instagram.com/serenenails.wg/" className="hover:text-pink-200">
                Instagram
              </a>
              {/* <a href="#" className="hover:text-pink-200">
                Twitter
              </a> */}
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2025 Serene Nails. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

