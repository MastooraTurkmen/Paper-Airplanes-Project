import { useState, useEffect } from "react";
import { navigation } from "../constants";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import menuIcon from "/icons/menu.svg";
import closeIcon from "/icons/close.svg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: delay },
  },
});

const elements = (delay) => ({
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.3, delay: delay },
  },
});

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  {
    /* Handle Menu Toggle */
  }
  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  {
    /* Handle Close menu when clicked a link */
  }
  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  {
    /* Handle window scroll event  */
  }
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinkClass = (url) =>
    `overflow-hidden ${
      url === pathname.pathname ? "text-white" : "text-white/70"
    }`;

  return (
    <header
      className={`navbar border-gray-800 w-full lg:px-16 flex justify-between items-center fixed z-[999] transition-colors duration-300 ${
        scrolled ? "bg-primary border-b" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <motion.div
        variants={container(0)}
        initial="hidden"
        animate="visible"
        className="navbar-start z-20"
      >
        <Link
          to="/"
          className="text-white text-lg lg:text-xl font-semibold ml-2"
        >
          Paper Airplanes
        </Link>
      </motion.div>

      {/* Desktop menu */}
      <div className=" w-full md:flex items-center justify-center hidden">
        <ul className="text-[15px] flex justify-between items-center gap-5 px-1">
          {navigation.map((item, i) => (
            <motion.li
              key={item.id}
              variants={elements(0.3 * i)}
              initial="hidden"
              animate="visible"
            >
              <Link to={item.url} className={navLinkClass(item.url)}>
                {item.title}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Register Button */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="navbar-end"
      >
        <Button className="bg-secondary lg:text-sm hover:border hover:border-orange-500 hover:bg-transparent font-semibold transition duration-500 text-white hidden md:block">
          <Link to="/register" className="cursor-pointer">
            Register
          </Link>
        </Button>

        <div
          className="h-10 w-10 md:hidden flex justify-center items-center z-20 cursor-pointer"
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
        >
          <img
            src={menuOpen ? closeIcon : menuIcon}
            alt={menuOpen ? "Close menu" : "Open menu"}
          />
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 bottom-0 right-0 flex flex-col justify-center items-center bg-primary z-10 md:hidden">
          <ul className="flex flex-col w-full px-10 gap-6">
            {navigation.map((item) => (
              <li key={item.id}>
                <Link
                  onClick={handleCloseMenu}
                  to={item.url}
                  className={`text-lg ${navLinkClass(item.url)}`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <Button className="bg-secondary text-white !text-lg w-full">
              Register
            </Button>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
