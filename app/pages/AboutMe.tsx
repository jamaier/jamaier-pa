import Image from "next/image";

// Animation
import { routeFade } from "../components/animations/animations";
import { motion } from "framer-motion";

// Assets
import Hero from "/public/assets/heroImage.png";

const AboutMe = () => {
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1 "
      variants={routeFade}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
        <div className="px-4 mx-6 sm:order-2">
          <Image src={Hero} alt="developer hero image" className="rounded-lg -z-10" />
        </div>
        <h5 className="my-3 font-semibold text-xl text-center sm:text-left sm:order-1">
          About Me Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores labore sint
          quaerat qui quibusdam deserunt consequuntu still like this for now just needs to be
          updated
        </h5>
      </div>
    </motion.div>
  );
};

export default AboutMe;
