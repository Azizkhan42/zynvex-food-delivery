import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, MapPin, ShoppingCart, User } from "lucide-react";

import Container from "../common/Container";
import Logo from "../common/Logo";
import SearchBar from "../ui/SearchBar";
import Button from "../ui/Button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Restaurants", path: "/restaurants" },
  { name: "Offers", path: "/offers" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-lg">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}

          <Logo />

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-[15px] font-medium transition-colors ${
                    isActive
                      ? "text-[var(--color-primary)]"
                      : "text-gray-700 hover:text-[var(--color-primary)]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right */}

          <div className="hidden items-center gap-4 lg:flex">
            <div className="w-72">
              <SearchBar />
            </div>

            <div className="flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-4 py-2">
              <MapPin size={18} className="text-[var(--color-primary)]" />

              <span className="text-sm font-medium">Doha</span>
            </div>

            <button className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 transition hover:bg-gray-200">
              <ShoppingCart size={22} />

              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-primary)] text-xs text-white">
                2
              </span>
            </button>

            <button className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 transition hover:bg-gray-200">
              <User size={20} />
            </button>

            <Button>Login</Button>
          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 lg:hidden"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}

        {isOpen && (
          <div className="border-t border-gray-100 py-5 lg:hidden">
            <div className="space-y-5">
              <SearchBar />

              <div className="space-y-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block text-base font-medium ${
                        isActive
                          ? "text-[var(--color-primary)]"
                          : "text-gray-700"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2">
                  <MapPin size={18} className="text-[var(--color-primary)]" />

                  <span className="text-sm font-medium">Doha</span>
                </div>

                <button className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gray-100">
                  <ShoppingCart size={22} />

                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-primary)] text-xs text-white">
                    2
                  </span>
                </button>
              </div>

              <Button className="w-full">Login</Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Navbar;
