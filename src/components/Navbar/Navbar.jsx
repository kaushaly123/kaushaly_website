import React, { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import LogoImage from "../../assets/Edify.png";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Services",
    path: "#services",
  },
  {
    id: 3,
    title: "About Us",
    path: "#aboutus",
  },
  {
    id: 4,
    title: "Our Team",
    path: "#team",
  },
  {
    id: 5,
    title: "Contact Us",
    path: "#contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="relative z-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-10 flex justify-between items-center z-10"
      >
        {/* Logo section */}
        <div className="">
          <img src={LogoImage} alt="Logo" className="h-24" />
        </div>

        {/* Mobile Hamburger menu section */}
        <button
          className="lg:hidden text-4xl focus:outline-none"
          onClick={toggleMenu}
        >
          <IoMdMenu />
        </button>

        {/* Desktop Navigation section */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="inline-block py-2 px-3 hover:text-secondary relative group"
                >
                  <div className="w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu section */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-20 z-40"
              onClick={toggleMenu}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 0.3 }}
              className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 p-6"
            >
              <ul className="flex flex-col items-center gap-4 py-10">
                {NavbarMenu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.path}
                      className="text-xl block hover:text-secondary"
                      onClick={() => setIsOpen(false)} // Close menu on link click
                    >
                      {menu.title}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </motion.div>
    </nav>
  );
};

export default Navbar;
