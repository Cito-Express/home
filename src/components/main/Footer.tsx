import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-primary dark:bg-foreground dark:text-main text-white ms-0 mt-auto">
      <div className="main py-20">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="space-y-4">
          <a href="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="Cito Logo" width={25} />
            <h3 className="text-2xl font-bold">Cito.</h3>
          </a>
            <p className="text-sm text-muted">
             We are dedicated to providing the best delivery service for your needs. Our team is committed to ensuring your packages arrive safely and on time.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="h-10 w-10 center bg-white/10 hover:bg-white/20 rounded-full">
                <Facebook size={20} />
              </a>
              <a href="#" className="h-10 w-10 center bg-white/10 hover:bg-white/20 rounded-full">
                <Instagram size={20} />
              </a>
              <a href="#" className="h-10 w-10 center bg-white/10 hover:bg-white/20 rounded-full">
                <Twitter size={20} />
              </a>
              <a href="#" className="h-10 w-10 center bg-white/10 hover:bg-white/20 rounded-full">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-sora font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-sm text-white/80 hover:text-white">Home</a></li>
              <li><a href="/#about" className="text-sm text-white/80 hover:text-white">About Us</a></li>
              <li><a href="/#agent" className="text-sm text-white/80 hover:text-white">Services</a></li>
              <li><a href="/#contact" className="text-sm text-white/80 hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-sora font-bold">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-white/80 hover:text-white">Cito Express</a></li>
              <li><a href="#" className="text-sm text-white/80 hover:text-white">Cito Eats</a></li>
              <li><a href="#" className="text-sm text-white/80 hover:text-white">Cito Store</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-sora font-bold">Newsletter</h3>
            <p className="text-sm text-white/80">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-10 px-4 rounded-lg text-sm w-full bg-white/10 text-white placeholder:text-white/60"
              />
              <button type="submit" className="btn bg-white text-primary dark:text-[#171717] w-full h-10 rounded-md">
                Subscribe
              </button>
            </form>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="text-sm text-white/80">11680 Seaton Road</p>
            <p className="text-sm text-white/80">Richmond, BC</p>
            <p className="text-sm text-white/80">Canada</p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Cito. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 