import { personalInfo } from "../constants/personalInfo";
import { styles } from "../styles";

const Introme = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m{" "}
            <span className="text-[#915EFF]">{personalInfo.nickname}</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Front-end |<br className="sm:block hidden" />
            Back-end Developer
          </p>
          <p className="mt-3 text-white-100">{personalInfo.about_me}</p>
        </div>
      </div>

      {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2"></div>
        </a>
      </div> */}
    </section>
  );
};

export default Introme;
