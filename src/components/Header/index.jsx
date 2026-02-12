import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { FaUser } from "react-icons/fa";
import Logo from "../Logo";
import { X, Menu, User } from "lucide-react";
import LiquidGlassButton from "../ui/LiquidGlassButton";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/evaluation", label: "Evaluations" },
    { to: "/faq", label: "FAQs" },
    { to: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Desktop & Mobile Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/40 backdrop-blur-2xl shadow-lg shadow-purple-500/10"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="relative group px-6 py-3"
                >
                  {isActive(link.to) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full border border-purple-500/30 backdrop-blur-sm" />
                  )}
                  <span
                    className={`relative z-10 text-lg font-semibold transition-all duration-300 ${
                      isActive(link.to)
                        ? "text-white"
                        : "text-gray-300 group-hover:text-white"
                    }`}
                  >
                    {link.label}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                  <div
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 ${
                      isActive(link.to) ? "w-0" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}

              {/* CTA Buttons */}
              <div className="flex items-center gap-4">
                {/* <a
                  href={`${import.meta.env.VITE_DASHBOARD_URL}/signup`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group overflow-hidden px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a> */}
                <LiquidGlassButton
                  width={200}
                  height={50}
                  className={"text-lg bg-blue-600/10"}
                  onClick={() =>
                    window.open(
                      import.meta.env.VITE_DASHBOARD_URL + "/signup",
                      "_blank",
                      "noopener,noreferrer",
                    )
                  }
                >
                  Get Started
                </LiquidGlassButton>

                {/* Profile Icon Button */}
                {/* <a
                  href={`${import.meta.env.VITE_DASHBOARD_URL}/login`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-[#33e4f6]/20 border border-[#33e4f6] cursor-pointer hover:bg-[#33e4f6]/30 text-white transition-all duration-300"
                >
                  <User size={26} />
                </a> */}
                <LiquidGlassButton
                  width={50}
                  height={50}
                  className={
                    "text-lg bg-blue-700/10 items-center flex justify-center"
                  }
                  onClick={() =>
                    window.open(
                      import.meta.env.VITE_DASHBOARD_URL + "/login",
                      "_blank",
                      "noopener,noreferrer",
                    )
                  }
                >
                  <User size={26} />
                </LiquidGlassButton>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-50 p-2 text-white hover:text-purple-400 transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Animated border bottom */}
        {/* <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent animate-pulse-slow" /> */}
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className={`absolute inset-0 bg-black/80 backdrop-blur-xs transition-opacity duration-500 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Sidebar */}
        <div
          className={`absolute top-0 right-0 h-full w-[280px] sm:w-[320px] bg-gradient-to-br from-black via-purple-950/20 to-black border-l border-purple-500/30 backdrop-blur-2xl transition-transform duration-500 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-blue-600/5 animate-gradient-shift" />

          {/* Content */}
          <div className="relative h-full flex flex-col pt-28 px-8">
            {/* Navigation Links */}
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="relative group"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: isMobileMenuOpen
                      ? "slideInRight 0.5s ease-out forwards"
                      : "none",
                  }}
                >
                  {isActive(link.to) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl border border-purple-500/30" />
                  )}

                  <div className="relative px-6 py-4 rounded-xl transition-all duration-300 group-hover:bg-white/5">
                    <span
                      className={`text-xl font-semibold transition-all duration-300 ${
                        isActive(link.to)
                          ? "text-white"
                          : "text-gray-300 group-hover:text-white group-hover:translate-x-2"
                      }`}
                    >
                      {link.label}
                    </span>
                  </div>
                </Link>
              ))}
            </nav>

            {/* CTA Section */}
            <div className="mt-auto mb-12 space-y-4">
              <a
                href={`${import.meta.env.VITE_DASHBOARD_URL}/login`}
                target="_blank"
                rel="noopener noreferrer"
                className=" relative group overflow-hidden px-8 py-4 flex items-center gap-2 rounded-xl border w-full justify-center border-purple-400 text-white font-bold text-center transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
              >
                <User size={26} />
                <span className="relative z-10">Login</span>
              </a>
              <a
                href={`${import.meta.env.VITE_DASHBOARD_URL}/signup`}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative group overflow-hidden px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-center transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
              >
                <span className="relative z-10">Get Started Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-20 right-8 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-40 left-8 w-24 h-24 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow" />
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes gradient-shift {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-gradient-shift {
          animation: gradient-shift 8s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default Header;
