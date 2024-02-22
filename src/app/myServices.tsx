"use client";
import Image from "next/image";
import "../styles/globals.css";

// Animation
import { motion } from "framer-motion";
import { fadeInUp, routeFade, stagger } from "@/components/animations/animations";

// Components
import ServiceCard from "@/components/services/ServiceCard";

// Data
import { services } from "@/components/services/ServiceData";

const MyServices = () => {
  return (
    <div
      className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-black-100 rounded-md"
      style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
    >
      <h4 className="my-3 text-xl font-semibold tracking-wide text-gray-900">What I am doing</h4>

      <motion.div
        className="grid gap-6 my-3 md:grid-cols-2"
        variants={stagger}
        animate="animate"
        initial="initial"
      >
        {services.map(service => (
          <motion.div
            className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-black-200 md:col-span-1 "
            key={service.title}
            variants={fadeInUp}
          >
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MyServices;
