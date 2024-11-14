// import { BallCanvas } from "./canvas";
//import { SectionWrapper } from "../hoc";
import { technologiesInfo } from "../constants/technologiesInfo";

const Technologies = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
        {technologiesInfo.map((technology) => (
          <div
            className="w-24 h-24 rounded-full border-4 border-purple-950 bg-gray-200 flex justify-center items-center"
            key={technology.name}
          >
            <img src={technology.icon} alt={technology.name} className="w-14" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Technologies;
