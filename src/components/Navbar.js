import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faEnvelope,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/logo.png";

export const navLinks = [
  { id: "about-us", title: "ABOUT US" },
  { id: "programes-events", title: "PROGRAM & EVENTS" },
  { id: "members-portal", title: "MEMBERS PORTAL" },
  { id: "alumni-stories", title: "ALUMNI STORIES" },
  { id: "career-oppurtunity", title: "CAREER OPPURTUNITY" },
  { id: "memberships", title: "MEMBERSHIP" },
];

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [navbarShadow, setNavbarShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setNavbarShadow(true);
      } else {
        setNavbarShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const currentPath = location.pathname.split("/")[1];
    const currentNav = navLinks.find((nav) => nav.id === currentPath);
    if (currentNav) {
      setActive(currentNav.title);
    } else {
      setActive("Home");
    }
  }, [location]);

  return (
    <>
      {/* Sticky Header Wrapper (Top Header + Navbar) */}
      <div className="fixed top-0 left-0 right-0 z-50">
        {/* Top Header */}
        <div className="bg-[#770504] text-white py-2 px-4">
          <div className="container mx-auto flex flex-col md:flex-row justify-between">
            <div className="flex justify-between lg:space-x-8 text-sm">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                <span>info@example.com</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                <span>+1 (123) 456-7890</span>
              </div>
            </div>
            <div className="hidden lg:flex space-x-2">
              <button className="px-2 py-1 text-xs bg-transparent border border-white rounded hover:bg-white hover:text-[#770504] transition-colors duration-300">
                <FontAwesomeIcon icon={faUser} className="mr-1" />
                Log In
              </button>
              <button className="px-2 py-1 text-xs bg-white text-[#770504] rounded hover:bg-[#770504] hover:text-white hover:border hover:border-white transition-colors duration-300">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav
          className={`transition-all duration-300 ${
            navbarShadow ? "shadow-md bg-white" : "bg-white"
          }`}
        >
          <div className="container mx-auto px-4 lg:px-0 flex items-center justify-between h-12 lg:h-16">
            {/* Mobile Menu Button (Left) */}
            <div className="lg:hidden flex items-center">
              <button 
                className="flex items-center text-[#770504]"
                onClick={() => setToggle((prev) => !prev)}
              >
                <FontAwesomeIcon
                  icon={toggle ? faTimes : faBars}
                  className="w-5 h-5"
                />
                <span className="ml-2 font-medium">MENU</span>
              </button>
            </div>

            {/* Centered Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-50">
              <Link to={"/"}>
                <img
                  src={logo}
                  alt="Logo"
                  className="w-[80px] h-[80px] lg:w-[180px] lg:h-[160px]"
                />
              </Link>
            </div>

            {/* Mobile Login Button (Right) */}
            <div className="lg:hidden flex items-center">
              <button className="px-3 py-1 text-xs bg-[#770504] text-white rounded flex items-center">
                <FontAwesomeIcon icon={faUser} className="mr-1" />
                LOGIN
              </button>
            </div>

            {/* Left Navigation Items (First 3) - Desktop */}
            <div className="hidden lg:flex items-center justify-start flex-1 pr-16">
              <ul className="flex space-x-8">
                {navLinks.slice(0, 3).map((nav) => (
                  <li
                    key={nav.id}
                    className={`relative py-2 ${
                      active === nav.title ? "text-[#770504]" : "text-[#770504]"
                    }`}
                    onClick={() => setActive(nav.title)}
                  >
                    <Link
                      className="px-2 py-1 text-sm font-medium hover:text-[#770504]/80 transition-colors duration-300"
                      to={`/${nav.id}`}
                    >
                      {nav.title}
                    </Link>
                    {active === nav.title && (
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 h-0.5 bg-[#770504]"></span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Navigation Items (Last 3) - Desktop */}
            <div className="hidden lg:flex items-center justify-end flex-1 pl-16">
              <ul className="flex space-x-8">
                {navLinks.slice(3, 6).map((nav) => (
                  <li
                    key={nav.id}
                    className={`relative py-2 ${
                      active === nav.title ? "text-[#770504]" : "text-[#770504]"
                    }`}
                    onClick={() => setActive(nav.title)}
                  >
                    <Link
                      className="px-2 py-1 text-sm font-medium hover:text-[#770504]/80 transition-colors duration-300"
                      to={`/${nav.id}`}
                    >
                      {nav.title}
                    </Link>
                    {active === nav.title && (
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 h-0.5 bg-[#770504]"></span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu Panel */}
            <div
              className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 transition-transform duration-300 ease-in-out ${
                toggle ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="flex justify-between items-center p-4 border-b">
                <div className="text-lg font-bold text-[#770504]">Menu</div>
                <button 
                  onClick={() => setToggle(false)}
                  className="text-[#770504]"
                >
                  <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
                </button>
              </div>
              <ul className="px-4 py-8 space-y-4 overflow-y-auto max-h-[calc(100vh-80px)]">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`${
                      active === nav.title ? "text-[#770504]" : "text-gray-700"
                    }`}
                    onClick={() => {
                      setActive(nav.title);
                      setToggle(false);
                    }}
                  >
                    <Link
                      to={`/${nav.id}`}
                      className="flex items-center justify-between py-2 px-3 rounded hover:bg-[#770504]/10 transition-colors duration-300"
                    >
                      <span className="font-medium">{nav.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* Add padding to prevent content from being hidden under the sticky header */}
      <div className="pt-[80px]"></div>
    </>
  );
};

export default Navbar;