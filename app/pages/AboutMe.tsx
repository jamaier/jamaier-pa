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
        <div className="sm:order-2">
          <Image src={Hero} alt="developer hero image" className="rounded-lg" />
        </div>
        <div className="flex flex-col px-5">
          <h1 className="mt-3 font-bold text-xl font-montserrat text-center sm:text-left sm:order-1">
            Hey there!
          </h1>
          <h1 className="mb-3 font-bold text-xl font-montserrat text-center sm:text-left sm:order-1">
            My name is Jake
          </h1>
          <h5 className="font-semibold text-lg font-montserrat text-center sm:text-left sm:order-1">
            About Me Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores labore sint
            quaerat qui quibusdam deserunt consequuntu still like this for now just needs to be
            updated
          </h5>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
