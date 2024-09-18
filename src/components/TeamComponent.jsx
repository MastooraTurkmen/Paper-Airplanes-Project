import { socials } from "../constants";
import { StudentsUsingComputer } from "../assets";
import { team } from "../constants/team";
import { motion } from "framer-motion";

const TeamComponent = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {team.map(({ id, image, name, position }) => {
        return (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: id * 0.3 }}
            key={id}
            className="text-white text-center px-8 py-5 flex flex-col
                    items-center border-2 z-0 border-[#86868B] tooltip m-8 rounded-xl"
          >
            <motion.img
              src={image}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 1.7 }}
              className="h-28 m-5 object-cover w-28 rounded-md"
              alt=""
            />
            <h1 className="text-xl">{name}</h1>
            <p className="text-sm text-[#F5F5F5]">{position}</p>
            <div className="flex items-center gap-2">
              {socials.map((social, index) => (
                <motion.img
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: -20 }}
                  transition={{ duration: 1, delay: index * 0.3 }}
                  src={social.src}
                  alt={social.title}
                  key={social.id}
                  className="w-5 h-10 md:w-5 mt-5 md:h-5"
                />
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default TeamComponent;
