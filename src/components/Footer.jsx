import { motion } from "framer-motion";
import { socials } from "../constants";
import waves from "/images/waves.png";
import waves2 from "/images/waves2.svg";

const Footer = () => {
  const links = [
    {
      id: 0,
      title: "Home",
      url: "#hero",
    },
    {
      id: 1,
      title: "For Student",
      url: "#student",
    },
    {
      id: 2,
      title: "Resources",
      url: "#resources",
    },
    {
      id: 3,
      title: "About Us",
      url: "#about",
    },
    {
      id: 4,
      title: "Contact Us",
      url: "#contact",
    },
  ];

  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 200 }}
      transition={{ duration: 1.5 }}
      className="text-xl bg-[#1D1E2F] md:relative md:z-10 overflow-hidden 
    w-full flex flex-col justify-center mx-auto lg:px-20 px-10 py-10 text-white"
    >
      <div className="main-headings flex flex-col gap-3 font-medium">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="text-xl"
        >
          Paper Airplanes
        </motion.h1>
        <div className="flex justify-center md:gap-5 flex-wrap md:flex-nowrap  items-center gap-3">
          <div
            className="flex justify-between mb-10  w-[700px] items-center md:gap-7 flex-wrap 
          md:flex-nowrap gap-[70px] text-lg lg:text-md "
          >
            {links.map((link, index) => (
              <motion.a
                href={link.url}
                key={link.id}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                transition={{ duration: 1, delay: index * 0.3 }}
              >
                {link.title}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
      <div
        className="flex justify-center items-center gap-3 mb-10 lg:gap-5"
        id="contact"
      >
        {socials.map((social, index) => (
          <motion.img
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -30 }}
            transition={{ duration: 1, delay: index * 0.5 }}
            src={social.src}
            alt={social.title}
            key={social.id}
            className="w-10 md:w-14"
          />
        ))}
      </div>
      <hr className="border-top-white/50" />
      <div className="mx-auto text-xs md:text-sm font-light mt-10">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.2 }}
        >
          Copyright &copy; {new Date().getFullYear()} Paper Airplanes | EIN
          81-4278267
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.2 }}
          className="underline"
        >
          Complaints
        </motion.p>
      </div>
      <img
        className="absolute -z-10 lg:w-[700px] hidden lg:left-[-300px]
            lg:block bottom-[430px] lg:bottom-[20px] rotate-[10deg] w-[800px] left-[-70px] md:left-[-150px]"
        src={waves}
        alt="waves"
      />
      <img
        className="absolute -z-10 lg:w-[700px] hidden lg:right-[-300px]
            lg:block bottom-[430px] lg:bottom-[120px] rotate-[10deg] w-[800px] right-[-70px] md:right-[-150px]"
        src={waves2}
        alt="waves"
      />
    </motion.div>
  );
};

export default Footer;
