import { motion } from "framer-motion";
import { routeFade, fadeInUp } from "@/app/components/animations/animations";

import SkillBar from "@/app/components/resume/SkillBar";

import { ResumeData } from "@/app/components/resume/ResumeData";
import { languages, tools } from "@/app/components/resume/ResumeData";

const Resume = () => {
  const renderResumeData = (jobNumber: number) => {
    const jobData = ResumeData.find(job => job.jobNumber === jobNumber);
    return jobData ? <ul>{renderBulletPoints(jobData.bulletPoint)}</ul> : null;
  };

  const renderBulletPoints = (bulletPoint: string[]) => {
    return bulletPoint.map((bulletPoint, index) => (
      <li key={index} className="py-1">
        {bulletPoint}
      </li>
    ));
  };

  return (
    <motion.div
      className="px-6 py-2"
      variants={routeFade}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/*  Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Nombolo</h5>
          <div className=" border-r-2">
            <h5 className="my-2 text-xl font-bold">Software Engineer</h5>
            <p className="font-semibold">May 2023 - Current</p>
            <p className="my-3">I am currently working as a software engineer at Nombolo</p>
            <div className="py-3 px-6">{renderResumeData(1)}</div>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Internship</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Software Developer Jr.</h5>
            <p className="font-semibold">TBD</p>
            <p className="my-3">More to come.</p>
            <div className="p-4">{renderResumeData(2)}</div>
          </div>
        </motion.div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Tools</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <SkillBar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Frameworks</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <SkillBar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
