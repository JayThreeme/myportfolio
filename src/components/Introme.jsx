import { TypeAnimation } from "react-type-animation";
import { myphoto } from "../assets";
import { personalInfo } from "../constants/personalInfo";
import { styles } from "../styles";
// import { motion } from "framer-motion";

const Introme = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto pt-20">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <div
          className={`${styles.padding} relative inset-0  mx-auto items-start flex flex-col xl:flex-row xl:px-56 `}
        >
          <div className="flex flex-row justify-center gap-5 w-full p-3">
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
              <div className="w-1 sm:h-80 h-full violet-gradient" />
            </div>

            <div className="pd-16">
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I&apos;m{" "}
                <span className="text-[#915EFF]">{personalInfo.nickname}</span>
              </h1>

              <p className={`${styles.heroSubText} mt-2 text-white-100 `}>
                <TypeAnimation
                  sequence={[
                    "Front-end Developer ",
                    800,
                    "Back-end Developer ",
                    800,
                    "Full-stack Developer ",
                    800,
                  ]}
                  speed={40}
                  style={{ fontSize: "1em", display: "inline-block" }}
                  repeat={0}
                />
                {/* Front-end |<br className="sm:block hidden" />
              Back-end Developer */}
              </p>

              <p className="mt-3 text-white-100  ">{personalInfo.shortdesc}</p>
            </div>
          </div>

          <div className="place-items-center w-full p-3">
            <img
              src={myphoto}
              alt="logo"
              style={{
                borderRadius: "50%",
                border: "5px solid #fff",
                objectFit: "cover",
              }}
              className="w-3/4"
            />
          </div>
        </div>

        {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2"></div>
        </a>
      </div> */}

        {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
      </div>
    </section>
  );
};

export default Introme;
