import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-text-dark text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-trust-blue to-hope-green rounded-full"></div>
              <span className="text-xl font-bold">HopeUnited</span>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering communities through compassion, action, and sustainable change.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-hope-green transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-hope-green transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-hope-green transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-hope-green transition-colors">Home</a></li>
              <li><a href="/volunteer" className="text-gray-300 hover:text-hope-green transition-colors">Volunteer</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-hope-green transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-hope-green transition-colors">Donate</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-hope-green" />
                <span className="text-gray-300">contact@hopeunited.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-hope-green" />
                <span className="text-gray-300">+91 9163805618</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-hope-green" />
                <span className="text-gray-300">173, DAS Para Road, Near Yuba Sammilini Club, Thakurpukur-700063</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8 text-center">
          <p className="text-gray-300">
            © 2025 HopeUnited. All rights reserved. Building a better tomorrow together.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;