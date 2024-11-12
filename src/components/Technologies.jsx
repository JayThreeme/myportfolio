// import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologiesInfo } from "../constants/technologiesInfo";

const Technologies = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologiesInfo.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-full h-full rounded-full border-4 border-white object-cover"
            />
          </div>
        ))}
      </div>
    </>
  );
};

const WrappedTech = SectionWrapper(Technologies, "projects");
export default WrappedTech;
