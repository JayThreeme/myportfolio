//import Tilt from "react-tilt";
import { motion } from "framer-motion";

//import { personalInfo } from "../constants/personalInfo";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { download } from "../assets";
import Technologies from "./Technologies";
import { personalInfo } from "../constants/personalInfo";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="place-items-center ">
        <p className={styles.sectionSubText}>Get to know me</p>
        <h2 className={styles.sectionHeadText}>About.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px]  leading-[30px] place-items-center  "
      >
        <div className="max-w-4xl">
          <p className="mt-3 text-white-100  ">{personalInfo.about_me}</p>
        </div>
      </motion.p>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="text-center pd-5 align-middle place-items-center mt-6 "
      >
        <a
          href="/my-file.pdf" // Path to file in the public folder
          download="my-file.pdf" // Name of the downloaded file
          className="flex items-center px-6 py-2 border-2 border-white text-white font-semibold rounded-lg shadow-md  hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-colors duration-200 w-40"
        >
          <motion.div
            animate={{
              y: [0, 3, 0],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <img
              src={download}
              alt="Download Icon"
              className="w-5 h-5 mr-2 text-white"
            />
          </motion.div>
          Resume
        </a>
      </motion.div>
      <motion.div>
        <Technologies />
      </motion.div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, "about");
export default WrappedAbout;
