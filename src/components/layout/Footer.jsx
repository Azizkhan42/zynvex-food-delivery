import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import Container from "../common/Container";
import Logo from "../common/Logo";

const Footer = () => {
  return (
    <footer className="bg-[#111827] py-20 text-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <Logo />

            <p className="mt-6 text-gray-400 leading-7">
              Delivering happiness to your doorstep with delicious food from
              your favorite restaurants.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-xl font-bold">Company</h3>

            <ul className="space-y-3 text-gray-400">
              <li>About</li>
              <li>Restaurants</li>
              <li>Offers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xl font-bold">Support</h3>

            <ul className="space-y-3 text-gray-400">
              <li>Help Center</li>
              <li>Privacy Policy</li>
              <li>Terms</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xl font-bold">Follow Us</h3>

            <div className="flex gap-4">
              <div className="rounded-full bg-gray-800 p-3">
                <FaFacebookF />
              </div>

              <div className="rounded-full bg-gray-800 p-3">
                <FaInstagram />
              </div>

              <div className="rounded-full bg-gray-800 p-3">
                <FaXTwitter />
              </div>
              <div className="rounded-full bg-gray-800 p-3">
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-700 pt-8 text-center text-gray-400">
          © 2026 Zynvex. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
