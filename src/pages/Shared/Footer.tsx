import Container from "@/components/ui/Container";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white  text-black shadow-[0_-4px_10px_rgba(0,0,0,0.2)] mt-8">
      <Container>
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h1 className="text-xl font-bold">
              <span className="gradient-text">Nature's Nest</span>
            </h1>
            <p>123 Green Valley Road</p>
            <p>Plantville, Country</p>
            <p>Email: contact@naturesnest.com</p>
            <p>Phone: +123 456 7890</p>
          </div>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul>
              <li>
                <a href="/" className="hover:text-green-500">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-green-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-green-500">
                  Products
                </a>
              </li>
              <li>
                <a href="/categories" className="hover:text-green-500">
                  Categories
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-green-500">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <p>Follow us on social media for the latest updates:</p>
            <div className="mt-4 flex gap-3 ">
              <a
                href="#"
                className="hover:text-green-300 text-green-500 w-5 h-5"
              >
                <FaFacebook></FaFacebook>
              </a>{" "}
              <a
                href="#"
                className="hover:text-green-300 text-green-500 w-5 h-5"
              >
                <FaTwitter></FaTwitter>
              </a>{" "}
              <a
                href="#"
                className="hover:text-green-300 text-green-500 w-5 h-5"
              >
                <FaInstagram></FaInstagram>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-green-500 pt-6 text-center">
          <p className="text-sm">
            &copy; 2024 Nature's Nest. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
