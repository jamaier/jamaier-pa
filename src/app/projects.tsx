import { useState } from "react";
import { motion } from "framer-motion";

// Data
import { projects as projectItem, Category } from "../components/projects/ProjectData";

// Animation
import { fadeInUp, routeFade, stagger } from "../components/animations/animations";

// Components
import ProjectCard from "@/components/projects/ProjectsCard";
import ProjectsNavbar from "@/components/navigation/ProjectsNavbar";

const Projects = () => {
  const [projects, setProjects] = useState(projectItem);
  const [active, setActive] = useState("All");

  const [showDetail, setShowDetail] = useState<null | Number>(null);

  const handleFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectItem);
      setActive(category);
      return;
    }

    const newArray = projectItem.filter(project => project.category.includes(category));

    setProjects(newArray);
    setActive(category);
  };

  return (
    <motion.div
      className="px-5 py-2 overflow-y-scroll "
      style={{ height: "65vh" }}
      variants={routeFade}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ProjectsNavbar handleFilterCategory={handleFilterCategory} active={active} />
      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="relative grid grid-cols-12 gap-4 my-3"
      >
        {projects.map(project => (
          <motion.div
            variants={fadeInUp}
            key={project.id}
            className="col-span-12 p-2 bg-gray-200 rounded-lg dark:bg-black-200 sm:col-span-6 lg:col-span-4"
          >
            <ProjectCard
              project={project}
              key={project.id}
              setShowDetail={setShowDetail}
              showDetail={showDetail}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
